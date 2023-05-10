package com.embraer.backend.chassisUserPilot.controller;

import com.embraer.backend.chassisUserOwner.dto.ChassisUserOwnerDTO;
import com.embraer.backend.chassisUserPilot.dto.ChassisUserPilotDTO;
import com.embraer.backend.chassisUserPilot.service.ChassisUserPilotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ChassisUserPilotController {

    @Autowired
    ChassisUserPilotService chassisUserPilotService;

    @CrossOrigin
    @PostMapping("/register-chassis-pilot")
    public ResponseEntity<?> registerChassisPilot(@RequestBody ChassisUserPilotDTO dto){

        try {
            chassisUserPilotService.registerChassisPilot(dto.getChassis(), dto.getPilot());

            return ResponseEntity.ok("SUCCESS");

        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");
        }

    }

    @CrossOrigin
    @GetMapping("list-all-chassis-pilots")
    public List<ChassisUserPilotDTO> listAllChassisPilots() {

        return chassisUserPilotService.listAllChassisPilots();

    }

    @CrossOrigin
    @GetMapping("delete-chassis-pilot/{id}")
    public ResponseEntity<?> deleteOwner(@PathVariable("id") Long id) {

        try {

            chassisUserPilotService.deleteChassiPilot(id);

            return ResponseEntity.ok("SUCCESS");

        } catch (Exception e) {
            return ResponseEntity.ok("NOT SUCCESS");
        }

    }

    @CrossOrigin
    @GetMapping("/update-pilot-status/{id}/{status}")
    public ResponseEntity<?> updatePilotStatus(@PathVariable("id") Long id,
                                              @PathVariable("status") String status) {
        try {
            chassisUserPilotService.updatePilotStatus(id, status);

            return ResponseEntity.ok("SUCCESS");
        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");
        }

    }

}
