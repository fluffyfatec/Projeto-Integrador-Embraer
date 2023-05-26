package com.embraer.backend.log.controller;

import com.embraer.backend.log.dto.LogDTO;
import com.embraer.backend.log.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class LogController {


    @Autowired
    LogService logService;


    @CrossOrigin
    @GetMapping("/list-all-logs-admin")
    public List<LogDTO> listAllLogsAdmin() {

        return logService.listAllLogsAdmin();

    }


    @CrossOrigin
    @GetMapping("/list-all-logs-editor")
    public List<LogDTO> listAllLogsEditor() {

        return logService.listAllLogsEditor();

    }



}
