package com.embraer.backend.chassisSb.service;

import com.embraer.backend.chassisSb.dto.ChassiServiceBulletinDTO;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.log.entity.Log;
import com.embraer.backend.log.repository.LogRepository;
import com.embraer.backend.notificationsSb.entity.NotificationsSb;
import com.embraer.backend.notificationsSb.repository.NotificationsSbRepository;
import com.embraer.backend.notificationsSb.service.util.ContainsSb;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Objects;

@Service
public class ChassiServiceBulletinService {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    ServiceBulletinRepository serviceBulletinRepository;

    @Autowired
    ContainsSb containsSb;

    @Autowired
    ChassisUserOwnerRepository chassisUserOwnerRepository;

    @Autowired
    NotificationsSbRepository notificationsSbRepository;

    @Autowired
    UserSession userSession;

    @Autowired
    UserRepository userRepository;

    @Autowired
    LogRepository logRepository;


    @Transactional
    public ResponseEntity<?> updateSbStatus(String sbName, String part, Long chassis, String status) {

        try {

            Long sbId = serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(sbName, part);

            if (Objects.equals(status, chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis))) {

                // If sb already has this status, skip UPDATE query
                return ResponseEntity.ok("The sb already has this status.");

            } else {

                String oldRegister = chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis);

                chassiServiceBulletinRepository.updateSbStatus(status, sbId, chassis);
                chassiServiceBulletinRepository.flush();

                String newRegister = chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis);

                // Log generation
                Log newLog = new Log();

                if (Objects.equals(part, "UNICO")) {
                    part = "UNIQUE";
                }

                newLog.setUsername(userSession.getUserAuthentication().getUsername());
                newLog.setRole(userSession.getUserAuthentication().getRole());
                newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
                newLog.setOperation("Change of " + sbName + " " + part + " Status in chassis " + chassis);
                newLog.setOldRegister(oldRegister);
                newLog.setNewRegister(newRegister);
                newLog.setChassis(chassis);
                newLog.setBooleanAdmin(0);

                logRepository.saveAndFlush(newLog);


                // Notification sb
                containsSb.saveSbNotification(sbId, chassis, "Changed Sb status");


                return ResponseEntity.ok("SUCCESS");

            }

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");

        }

    }


    @Transactional
    public void saveNewSb(ChassiServiceBulletinDTO chassiServiceBulletinDTO) {

        try {

            UserAuthenticationDto userAuthenticationDto = userSession.getUserAuthentication();

            Long userId = userRepository.getUserIdByUserName(userAuthenticationDto.getUsername());

            // Create Sb if it doesn't exist in database
            if (serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(chassiServiceBulletinDTO.getName(), chassiServiceBulletinDTO.getPart()) == null) {

                ServiceBulletin serviceBulletin = new ServiceBulletin();

                serviceBulletin.setServiceBulletinName(chassiServiceBulletinDTO.getName());
                serviceBulletin.setServiceBulletinDtRegister(new Timestamp(System.currentTimeMillis()));
                serviceBulletin.setServiceBulletinPart(chassiServiceBulletinDTO.getPart());
                serviceBulletin.setUserRegister(null);

                serviceBulletinRepository.saveAndFlush(serviceBulletin);

            }

            // Create relation of Sb with a chassis in SB_CHASSI table
            Long sbId = serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(chassiServiceBulletinDTO.getName(), chassiServiceBulletinDTO.getPart());

            ChassiServiceBulletin chassiServiceBulletin = new ChassiServiceBulletin();

            chassiServiceBulletin.setServiceBulletinStatus(chassiServiceBulletinDTO.getStatus());
            chassiServiceBulletin.setServiceBulletinIdLong(sbId);
            chassiServiceBulletin.setChassiIdLong(chassiServiceBulletinDTO.getChassis());

            chassiServiceBulletinRepository.saveAndFlush(chassiServiceBulletin);


            // Log generation
            Log newLog = new Log();

            String part = chassiServiceBulletinDTO.getPart();
            if (Objects.equals(part, "UNICO")) {
                part = "UNIQUE";
            }

            newLog.setUsername(userSession.getUserAuthentication().getUsername());
            newLog.setRole(userSession.getUserAuthentication().getRole());
            newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
            newLog.setOperation("Creation of " + chassiServiceBulletinDTO.getName() + " " + part
                    + " in chassis " + chassiServiceBulletinDTO.getChassis());
            newLog.setOldRegister("It does not have");
            newLog.setNewRegister(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassiServiceBulletinDTO.getChassis()));
            newLog.setChassis(chassiServiceBulletinDTO.getChassis());
            newLog.setBooleanAdmin(0);

            logRepository.saveAndFlush(newLog);


            // Notifications of Sb
            NotificationsSb newNotification = new NotificationsSb();
            newNotification.setUserLong(userId);
            newNotification.setSbLong(sbId);
            newNotification.setChassisLong(chassiServiceBulletinDTO.getChassis());
            newNotification.setOperation("Creation of new Sb");
            newNotification.setStatusChange(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassiServiceBulletinDTO.getChassis()));
            newNotification.setDtregister(new Timestamp(System.currentTimeMillis()));
            newNotification.setItemIdLong(469L);
            newNotification.setBooleanAdmin(0);
            newNotification.setOwner(chassisUserOwnerRepository.getChassisOwnerNameByChassisId(chassiServiceBulletinDTO.getChassis()));
            newNotification.setItemStatus(null);
            notificationsSbRepository.saveAndFlush(newNotification);

            NotificationsSb newNotificationAdmin = new NotificationsSb();
            newNotificationAdmin.setUserLong(userId);
            newNotificationAdmin.setSbLong(sbId);
            newNotificationAdmin.setChassisLong(chassiServiceBulletinDTO.getChassis());
            newNotificationAdmin.setOperation("Creation of new Sb");
            newNotificationAdmin.setStatusChange(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassiServiceBulletinDTO.getChassis()));
            newNotificationAdmin.setDtregister(new Timestamp(System.currentTimeMillis()));
            newNotificationAdmin.setItemIdLong(469L);
            newNotificationAdmin.setBooleanAdmin(1);
            newNotificationAdmin.setOwner(chassisUserOwnerRepository.getChassisOwnerNameByChassisId(chassiServiceBulletinDTO.getChassis()));
            newNotificationAdmin.setItemStatus(null);
            notificationsSbRepository.saveAndFlush(newNotificationAdmin);


            // If the Sb already has conditions linked to it, then generate notification
            containsSb.saveSbNotification(sbId, chassiServiceBulletinDTO.getChassis(), "Unlocking items by the new Sb");

        } catch (Exception e) {
            e.printStackTrace();
        }

    }


}
