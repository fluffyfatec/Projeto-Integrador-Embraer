package com.embraer.backend.chassisUserPilot.service;

import com.embraer.backend.chassisUserOwner.dto.ChassisUserOwnerDTO;
import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.chassisUserPilot.dto.ChassisUserPilotDTO;
import com.embraer.backend.chassisUserPilot.entity.ChassisUserPilot;
import com.embraer.backend.chassisUserPilot.repositories.ChassisUserPilotRepository;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


    public void registerChassisPilot(Long chassis, String pilot) {

        try {

            ChassisUserPilot newChassisUserPilot = new ChassisUserPilot();

            Long pilotId = userRepository.getUserIdByUserName(pilot);

            ChassisUserOwner chassisUserOwner = chassisUserOwnerRepository.getChassisUserOwnerByChassisId(chassis);

           newChassisUserPilot.setOwnerLong(chassisUserOwner.getId());
           newChassisUserPilot.setPilotLong(pilotId);
           newChassisUserPilot.setChassisLong(chassis);

           chassisUserPilotRepository.save(newChassisUserPilot);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public List<ChassisUserPilotDTO> listAllChassisPilots() {

        List<ChassisUserPilotDTO> listDTO = new ArrayList<>();

        List<ChassisUserPilot> listOwners = chassisUserPilotRepository.findAll();

        for (ChassisUserPilot list : listOwners) {
            ChassisUserPilotDTO dto = new ChassisUserPilotDTO();

            String pilot = userRepository.getUserNameByUserId(list.getPilotLong());
            String owner = userRepository.getUserNameByUserId(list.getOwner().getUserLong());

            dto.setId(list.getId());
            dto.setOwner(owner);
            dto.setPilot(pilot);
            dto.setChassis(list.getChassisLong());

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


}
