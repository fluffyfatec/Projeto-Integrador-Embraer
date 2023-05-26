package com.embraer.backend.chassisUserOwner.service;

import com.embraer.backend.chassisUserOwner.dto.ChassisUserOwnerDTO;
import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.chassisUserPilot.repositories.ChassisUserPilotRepository;
import com.embraer.backend.log.entity.Log;
import com.embraer.backend.log.repository.LogRepository;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ChassisUserOwnerService {

    @Autowired
    ChassisUserOwnerRepository chassisUserOwnerRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ChassisUserPilotRepository chassisUserPilotRepository;

    @Autowired
    LogRepository logRepository;

    @Autowired
    UserSession userSession;


    public void registerChassisOwner(String owner, Long chassis) {

        try {

            ChassisUserOwner newChassisUserOwner = new ChassisUserOwner();

            Long userId = userRepository.getUserIdByUserName(owner);

            newChassisUserOwner.setUserLong(userId);
            newChassisUserOwner.setChassisLong(chassis);
            newChassisUserOwner.setDtregister(new Timestamp(System.currentTimeMillis()));
            newChassisUserOwner.setStatus("A");

            chassisUserOwnerRepository.save(newChassisUserOwner);


            // Log generation
            Log newLog = new Log();

            newLog.setUsername(userSession.getUserAuthentication().getUsername());
            newLog.setRole(userSession.getUserAuthentication().getRole());
            newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
            newLog.setOperation("Register chassis " + chassis + " owner");
            newLog.setOldRegister("It does not have");
            newLog.setNewRegister(owner + " is the owner of chassis " + chassis);
            newLog.setChassis(chassis);
            newLog.setBooleanAdmin(0);

            logRepository.saveAndFlush(newLog);


        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public List<ChassisUserOwnerDTO> listAllChassisOwners() {

        List<ChassisUserOwnerDTO> listDTO = new ArrayList<>();

        List<ChassisUserOwner> listOwners = chassisUserOwnerRepository.findAll();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        for (ChassisUserOwner list : listOwners) {
            ChassisUserOwnerDTO dto = new ChassisUserOwnerDTO();

            String owner = userRepository.getUserNameByUserId(list.getUserLong());

            String formatedDate = dateFormat.format(list.getDtregister());

            dto.setId(list.getId());
            dto.setOwner(owner);
            dto.setChassis(list.getChassisLong());
            dto.setDate_register(formatedDate);
            dto.setStatus(list.getStatus());

            listDTO.add(dto);

        }

        return listDTO;

    }

    @Transactional
    public void deleteOwner(Long id) {

        try {
            ChassisUserOwner chassisUserOwner = chassisUserOwnerRepository.getChassisUserOwnerById(id);

            chassisUserPilotRepository.deleteByOwnerId(id);

            chassisUserOwnerRepository.delete(chassisUserOwner);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Transactional
    public void updateOwnerStatus(Long id, String status) {

        try {

            Long chassis = chassisUserOwnerRepository.getChassisByOwnerId(id);
            String owner = chassisUserOwnerRepository.getOwnerNameByOwnerId(id);


            if (Objects.equals(status, "Active")) {

                chassisUserOwnerRepository.updateOwnerStatus("I", id);


                // Log generation
                Log newLog = new Log();

                newLog.setUsername(userSession.getUserAuthentication().getUsername());
                newLog.setRole(userSession.getUserAuthentication().getRole());
                newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
                newLog.setOperation("Update " + owner + " owner register in chassis " + chassis + " Status");
                newLog.setOldRegister("Active");
                newLog.setNewRegister("Inactive");
                newLog.setChassis(chassis);
                newLog.setBooleanAdmin(0);

                logRepository.saveAndFlush(newLog);


            }

            if (Objects.equals(status, "Inactive")) {

                chassisUserOwnerRepository.updateOwnerStatus("A", id);


                // Log generation
                Log newLog = new Log();

                newLog.setUsername(userSession.getUserAuthentication().getUsername());
                newLog.setRole(userSession.getUserAuthentication().getRole());
                newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
                newLog.setOperation("Update " + owner + " owner register in chassis " + chassis + " Status");
                newLog.setOldRegister("Inactive");
                newLog.setNewRegister("Active");
                newLog.setChassis(chassis);
                newLog.setBooleanAdmin(0);

                logRepository.saveAndFlush(newLog);

            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }



}
