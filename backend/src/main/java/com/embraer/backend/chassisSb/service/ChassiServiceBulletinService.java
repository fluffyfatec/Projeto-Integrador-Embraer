package com.embraer.backend.chassisSb.service;

import com.embraer.backend.chassisSb.dto.ChassiServiceBulletinDTO;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;

@Service
public class ChassiServiceBulletinService {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    ServiceBulletinRepository serviceBulletinRepository;


    @Transactional
    public void updateSbStatus(String sbName, String part, Long chassis, String status) {

        try {

            Long sbId = serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(sbName, part);

            chassiServiceBulletinRepository.updateSbStatus(status, sbId, chassis);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }


    @Transactional
    public void saveNewSb(ChassiServiceBulletinDTO chassiServiceBulletinDTO) {

        try {

            if (serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(chassiServiceBulletinDTO.getName(), chassiServiceBulletinDTO.getPart()) == null) {

                ServiceBulletin serviceBulletin = new ServiceBulletin();

                serviceBulletin.setServiceBulletinName(chassiServiceBulletinDTO.getName());
                serviceBulletin.setServiceBulletinDtRegister(new Timestamp(System.currentTimeMillis()));
                serviceBulletin.setServiceBulletinPart(chassiServiceBulletinDTO.getPart());
                serviceBulletin.setUserRegister(null);

                serviceBulletinRepository.save(serviceBulletin);

            }

            Long sbId = serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(chassiServiceBulletinDTO.getName(), chassiServiceBulletinDTO.getPart());

            ChassiServiceBulletin chassiServiceBulletin = new ChassiServiceBulletin();

            chassiServiceBulletin.setServiceBulletinStatus(chassiServiceBulletinDTO.getStatus());
            chassiServiceBulletin.setServiceBulletinIdLong(sbId);
            chassiServiceBulletin.setChassiIdLong(chassiServiceBulletinDTO.getChassis());

            chassiServiceBulletinRepository.save(chassiServiceBulletin);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }


}
