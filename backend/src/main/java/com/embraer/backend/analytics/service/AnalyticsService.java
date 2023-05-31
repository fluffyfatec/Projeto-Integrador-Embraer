package com.embraer.backend.analytics.service;

import com.embraer.backend.analytics.dto.ListGraphicItemsStatusDataDTO;
import com.embraer.backend.analytics.dto.ListGraphicSbsStatusDTO;
import com.embraer.backend.analytics.dto.ListGraphicsOwnersDTO;
import com.embraer.backend.analytics.service.util.GraphicsAllOfItems;
import com.embraer.backend.analytics.service.util.GraphicsAllOfSbs;
import com.embraer.backend.analytics.service.util.GraphicsItems;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.chassisUserPilot.repositories.ChassisUserPilotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

        List<ListGraphicsOwnersDTO> owners = chassisUserOwnerRepository.groupByOwner();

        for (ListGraphicsOwnersDTO owner : owners) {

            owner.setOwner_name(chassisUserOwnerRepository.getOwnerNameByOwnerId(owner.getOwner_id()));

        }

        return owners;

    }


}
