package com.embraer.backend.chassisUserOwner.service;

import com.embraer.backend.chassisUserOwner.dto.ChassisUserOwnerDTO;
import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.chassisUserPilot.repositories.ChassisUserPilotRepository;
import com.embraer.backend.user.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class ChassisUserOwnerService {

    @Autowired
    ChassisUserOwnerRepository chassisUserOwnerRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ChassisUserPilotRepository chassisUserPilotRepository;


    public void registerChassisOwner(String owner, Long chassis) {

        try {

            ChassisUserOwner newChassisUserOwner = new ChassisUserOwner();

            Long userId = userRepository.getUserIdByUserName(owner);

            newChassisUserOwner.setUserLong(userId);
            newChassisUserOwner.setChassisLong(chassis);
            newChassisUserOwner.setDtregister(new Timestamp(System.currentTimeMillis()));

            chassisUserOwnerRepository.save(newChassisUserOwner);

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


}
