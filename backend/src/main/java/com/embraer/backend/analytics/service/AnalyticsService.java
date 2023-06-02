package com.embraer.backend.analytics.service;

import com.embraer.backend.analytics.dto.ListGraphicItemsStatusDataDTO;
import com.embraer.backend.analytics.dto.ListGraphicSbsStatusDTO;
import com.embraer.backend.analytics.dto.ListGraphicsOwnersDTO;
import com.embraer.backend.analytics.dto.ListGraphicsPilotsDTO;
import com.embraer.backend.analytics.service.util.GraphicsAllOfItems;
import com.embraer.backend.analytics.service.util.GraphicsAllOfSbs;
import com.embraer.backend.analytics.service.util.GraphicsItems;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.chassisUserPilot.repositories.ChassisUserPilotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnalyticsService {

    @Autowired
    GraphicsItems graphicsItems;

    @Autowired
    GraphicsAllOfItems graphicsAllOfItems;

    @Autowired
    GraphicsAllOfSbs graphicsAllOfSbs;

    @Autowired
    ChassisUserOwnerRepository chassisUserOwnerRepository;

    @Autowired
    ChassisUserPilotRepository chassisUserPilotRepository;


    public ListGraphicItemsStatusDataDTO dataOfGraphicItemStatusByChassis(Long itemId) {

        return graphicsItems.generateGraphicData(itemId);

    }

    public ListGraphicItemsStatusDataDTO dataOfGraphicMacroItemStatus() {

        return graphicsAllOfItems.generateGraphicData();

    }


    public ListGraphicSbsStatusDTO dataOfGraphicMacroSbStatus() {

        return graphicsAllOfSbs.getDataToGraphicMacroSbs();

    }

    public List<ListGraphicsOwnersDTO> dataOfGraphicOwners() {

        List<Object[]> dtos = chassisUserOwnerRepository.groupByOwner();

        List<ListGraphicsOwnersDTO> owners = new ArrayList<>();

        for (Object[] dto : dtos) {

            ListGraphicsOwnersDTO owner = new ListGraphicsOwnersDTO();

            owner.setOwner_id((Long) dto[0]);
            owner.setData_owner((Long) dto[1]);
            owner.setOwner_name(chassisUserOwnerRepository.getOwnerNameByUserId((Long) dto[0]));

            owners.add(owner);

        }

        return owners;

    }


    public List<ListGraphicsPilotsDTO> dataOfGraphicPilots() {

        List<Object[]> dtos = chassisUserPilotRepository.groupByPilot();

        List<ListGraphicsPilotsDTO> pilots = new ArrayList<>();

        for (Object[] dto : dtos) {

            ListGraphicsPilotsDTO pilot = new ListGraphicsPilotsDTO();

            pilot.setPilot_id((Long) dto[0]);
            pilot.setData_pilot((Long) dto[1]);
            pilot.setPilot_name(chassisUserPilotRepository.getPilotNameByUserId((Long) dto[0]));

            pilots.add(pilot);

        }

        return pilots;

    }



}
