package com.embraer.backend.analytics.controller;

import com.embraer.backend.analytics.service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class AnalyticsController {

    @Autowired
    AnalyticsService analyticsService;


    @CrossOrigin
    @GetMapping("/data-graphic-item-status/{itemId}")
    public ResponseEntity<?> dataForGraphicItemStatus(@PathVariable("itemId") Long itemId) {

        try {

            return ResponseEntity.ok(analyticsService.dataOfGraphicItemStatusByChassis(itemId));

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");

        }

    }


}