package com.embraer.backend.condition.controller;

import com.embraer.backend.condition.dto.ConditionDTO;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.condition.service.ConditionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ConditionController {

    @Autowired
    private ConditionService conditionService;

    @CrossOrigin
    @PostMapping("/register-condition")
    public ResponseEntity<?> createCondition(@RequestBody ConditionDTO conditionDTO) {

        try {
            conditionService.saveConditionAndItem(conditionDTO);
            return ResponseEntity.ok("SUCCESS");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok("NOT SUCCESS");
        }



    }

    @CrossOrigin
    @PostMapping("/edit-condition")
    public ResponseEntity<?> updateCondition(@RequestBody ConditionDTO conditionDTO) {
        try {
            conditionService.updateCondition(conditionDTO);
            return ResponseEntity.ok("SUCCESS");
        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");
        }

    }

    @CrossOrigin
    @GetMapping("/delete/{condition}/{item}")
    public ResponseEntity<?> deleteCondition(@PathVariable("condition") Long condition, @PathVariable("item") Long item) {
        try {
            conditionService.deleteConditionAndItem(condition, item);
            return ResponseEntity.ok("SUCCESS");
        } catch (Exception e) {
            return ResponseEntity.ok("NOT SUCCESS");
        }
    }

    @CrossOrigin
    @GetMapping("/list/condition/{item}")
    public ConditionDTO listConditionOfItem(@PathVariable("item") Long item) {
        return conditionService.listConditionByItemId(item);
    }





}
