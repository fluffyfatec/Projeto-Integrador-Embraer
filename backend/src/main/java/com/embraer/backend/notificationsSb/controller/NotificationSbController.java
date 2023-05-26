package com.embraer.backend.notificationsSb.controller;

import com.embraer.backend.log.dto.LogDTO;
import com.embraer.backend.notificationsSb.dto.NotificationSbDTO;
import com.embraer.backend.notificationsSb.service.NotificationSbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class NotificationSbController {

    @Autowired
    NotificationSbService notificationSbService;


    @CrossOrigin
    @GetMapping("/list-all-notifications-admin")
    public List<NotificationSbDTO> notificationsAdmin() {

        return notificationSbService.notificationsAdm();

    }

    @CrossOrigin
    @GetMapping("/list-all-notifications-editor")
    public List<NotificationSbDTO> notificationsEditor() {

        return notificationSbService.notificationsEditor();

    }

    @CrossOrigin
    @GetMapping("/delete-notification/{id}")
    public ResponseEntity<?> deleteNotification(@PathVariable("id") Long id) {

        try {

            notificationSbService.deleteNotification(id);

            return ResponseEntity.ok("SUCCESS");

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");

        }

    }



}
