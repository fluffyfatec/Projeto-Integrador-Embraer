package com.embraer.backend.analytics.service;

import com.embraer.backend.analytics.dto.ListGraphicItemsStatusDataDTO;
import com.embraer.backend.analytics.service.util.GraphicsItems;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnalyticsService {

    @Autowired
    GraphicsItems graphicsItems;


    public ListGraphicItemsStatusDataDTO dataOfGraphicItemStatusByChassis(Long itemId) {

        return graphicsItems.generateGraphicData(itemId);

    }


}
