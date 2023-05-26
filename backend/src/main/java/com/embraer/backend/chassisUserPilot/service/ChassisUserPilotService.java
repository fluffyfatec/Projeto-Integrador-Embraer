package com.embraer.backend.chassisUserPilot.service;

import com.embraer.backend.chassisUserOwner.dto.ChassisUserOwnerDTO;
import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.chassisUserPilot.dto.ChassisUserPilotDTO;
import com.embraer.backend.chassisUserPilot.entity.ChassisUserPilot;
import com.embraer.backend.chassisUserPilot.repositories.ChassisUserPilotRepository;
import com.embraer.backend.log.entity.Log;
import com.embraer.backend.log.repository.LogRepository;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
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
public class ChassisUserPilotService {

    @Autowired
    ChassisUserPilotRepository chassisUserPilotRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ChassisUserOwnerRepository chassisUserOwnerRepository;

    @Autowired
    UserSession userSession;

    @Autowired
    LogRepository logRepository;


    public void registerChassisPilot(Long chassis, String pilot) {

        try {

            ChassisUserPilot newChassisUserPilot = new ChassisUserPilot();

            Long pilotId = userRepository.getUserIdByUserName(pilot);

            ChassisUserOwner chassisUserOwner = chassisUserOwnerRepository.getChassisUserOwnerByChassisId(chassis);

           newChassisUserPilot.setOwnerLong(chassisUserOwner.getId());
           newChassisUserPilot.setPilotLong(pilotId);
           newChassisUserPilot.setChassisLong(chassis);
           newChassisUserPilot.setDtregister(new Timestamp(System.currentTimeMillis()));
           newChassisUserPilot.setStatus("A");

           chassisUserPilotRepository.save(newChassisUserPilot);


            // Log generation
            Log newLog = new Log();

            newLog.setUsername(userSession.getUserAuthentication().getUsername());
            newLog.setRole(userSession.getUserAuthentication().getRole());
            newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
            newLog.setOperation("Register chassis " + chassis + " pilot");
            newLog.setOldRegister("It does not have");
            newLog.setNewRegister(pilot + " is one of the pilots of chassis " + chassis);
            newLog.setChassis(chassis);
            newLog.setBooleanAdmin(0);

            logRepository.saveAndFlush(newLog);


        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public List<ChassisUserPilotDTO> listAllChassisPilots() {

        List<ChassisUserPilotDTO> listDTO = new ArrayList<>();

        List<ChassisUserPilot> listOwners = chassisUserPilotRepository.findAll();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        for (ChassisUserPilot list : listOwners) {
            ChassisUserPilotDTO dto = new ChassisUserPilotDTO();

            String pilot = userRepository.getUserNameByUserId(list.getPilotLong());
            String owner = userRepository.getUserNameByUserId(list.getOwner().getUserLong());

            String formatedDate = dateFormat.format(list.getDtregister());

            dto.setId(list.getId());
            dto.setOwner(owner);
            dto.setPilot(pilot);
            dto.setChassis(list.getChassisLong());
            dto.setDate_register(formatedDate);
            dto.setStatus(list.getStatus());

            listDTO.add(dto);

        }

        UserAuthenticationDto userAuthenticationDto = userSession.getUserAuthentication();

        listDTO.removeIf(itemDTO -> !Objects.equals(userAuthenticationDto.getUsername(), itemDTO.getOwner()));

        return listDTO;
    }

    @Transactional
    public void deleteChassiPilot(Long id) {

        try {

            ChassisUserPilot chassisUserPilot = chassisUserPilotRepository.getChassisUserPilotById(id);

            chassisUserPilotRepository.delete(chassisUserPilot);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Transactional
    public void updatePilotStatus(Long id, String status) {

        try {

            Long chassis = chassisUserPilotRepository.getChassisByPilotId(id);
            String pilot = chassisUserPilotRepository.getPilotNameByPilotId(id);


            if (Objects.equals(status, "Active")) {

                chassisUserPilotRepository.updatePilotStatus("I", id);

                // Log generation
                Log newLog = new Log();

                newLog.setUsername(userSession.getUserAuthentication().getUsername());
                newLog.setRole(userSession.getUserAuthentication().getRole());
                newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
                newLog.setOperation("Update " + pilot + " pilot register in chassis " + chassis + " Status");
                newLog.setOldRegister("Active");
                newLog.setNewRegister("Inactive");
                newLog.setChassis(chassis);
                newLog.setBooleanAdmin(0);

                logRepository.saveAndFlush(newLog);

            }

            if (Objects.equals(status, "Inactive")) {

                chassisUserPilotRepository.updatePilotStatus("A", id);


                // Log generation
                Log newLog = new Log();

                newLog.setUsername(userSession.getUserAuthentication().getUsername());
                newLog.setRole(userSession.getUserAuthentication().getRole());
                newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
                newLog.setOperation("Update " + pilot + " pilot register in chassis " + chassis + " Status");
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
