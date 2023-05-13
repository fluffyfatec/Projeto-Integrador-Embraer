package com.embraer.backend.chassisUserOwner.controller;

import com.embraer.backend.chassisUserOwner.dto.ChassisUserOwnerDTO;
import com.embraer.backend.chassisUserOwner.service.ChassisUserOwnerService;
import com.embraer.backend.serviceBulletin.listServiceBulletinsAll.dto.ListServiceBulletinAllDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@RestController
@RequestMapping
public class ChassisUserOwnerController {

    @Autowired
    ChassisUserOwnerService chassisUserOwnerService;

    @CrossOrigin
    @PostMapping("/register-chassis-owner")
    public ResponseEntity<?> registerChassisOwner(@RequestBody ChassisUserOwnerDTO dto) {
        try {

            chassisUserOwnerService.registerChassisOwner(dto.getOwner(), dto.getChassis());

            return ResponseEntity.ok("SUCCESS");

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");
        }
    }

    @CrossOrigin
    @GetMapping("list-all-owners")
    public List<ChassisUserOwnerDTO> listAllChassisOwners() {

            return chassisUserOwnerService.listAllChassisOwners();

    }


    @CrossOrigin
    @GetMapping("delete-owner/{id}")
    public ResponseEntity<?> deleteOwner(@PathVariable("id") Long id) {

        try {

            chassisUserOwnerService.deleteOwner(id);

            return ResponseEntity.ok("SUCCESS");

        } catch (Exception e) {
            return ResponseEntity.ok("NOT SUCCESS");
        }

    }

    @CrossOrigin
    @GetMapping("/update-owner-status/{id}/{status}")
    public ResponseEntity<?> updateOwnerStatus(@PathVariable("id") Long id,
                                              @PathVariable("status") String status) {
        try {
            chassisUserOwnerService.updateOwnerStatus(id, status);

            return ResponseEntity.ok("SUCCESS");
        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");
        }

    }


}
