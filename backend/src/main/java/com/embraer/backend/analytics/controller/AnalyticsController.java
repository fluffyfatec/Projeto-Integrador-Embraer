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

    @CrossOrigin
    @GetMapping("/data-graphic-macro-item-status")
    public ResponseEntity<?> dataForGraphicMacroItemStatus() {

        try {

            return ResponseEntity.ok(analyticsService.dataOfGraphicMacroItemStatus());

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");

        }

    }


    @CrossOrigin
    @GetMapping("/data-graphic-macro-sb-status")
    public ResponseEntity<?> dataForGraphicMacroSbStatus() {

        try {

            return ResponseEntity.ok(analyticsService.dataOfGraphicMacroSbStatus());

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");

        }

    }


    @CrossOrigin
    @GetMapping("/data-graphic-owners")
    public ResponseEntity<?> dataForGraphicOwners() {

        try {

            return ResponseEntity.ok(analyticsService.dataOfGraphicOwners());

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");

        }

    }




}
