package com.embraer.backend.chassisSb.controller;

import com.embraer.backend.chassisSb.dto.ChassiServiceBulletinDTO;
import com.embraer.backend.chassisSb.service.ChassiServiceBulletinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class ChassiServiceBulletinController {

    @Autowired
    ChassiServiceBulletinService chassiServiceBulletinService;

    @CrossOrigin
    @GetMapping("/edit-sb-status/{sbName}/{sbPart}/{chassis}/{sbStatus}")
    public ResponseEntity<?> updateSbStatus(@PathVariable("sbName") String sbName, @PathVariable("sbPart") String sbPart,
                                            @PathVariable("chassis") Long chassis, @PathVariable("sbStatus") String sbStatus) {

        try {

            chassiServiceBulletinService.updateSbStatus(sbName, sbPart, chassis, sbStatus);

            return ResponseEntity.ok("SUCCESS");

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");

        }


    }

    @CrossOrigin
    @PostMapping("register-new-sb-or-chassi")
    public ResponseEntity<?> registerNewSbOrChassi(@RequestBody ChassiServiceBulletinDTO chassiServiceBulletinDTO) {

        try {

            chassiServiceBulletinService.saveNewSb(chassiServiceBulletinDTO);

            return ResponseEntity.ok("SUCCESS");

        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");
        }


    }


}
