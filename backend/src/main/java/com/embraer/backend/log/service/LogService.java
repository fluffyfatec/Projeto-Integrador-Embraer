package com.embraer.backend.log.service;

import com.embraer.backend.log.dto.LogDTO;
import com.embraer.backend.log.entity.Log;
import com.embraer.backend.log.repository.LogRepository;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class LogService {

    @Autowired
    LogRepository logRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserSession userSession;


    public List<LogDTO> listAllLogsAdmin() {

        List<LogDTO> listDTO = new ArrayList<>();
        List<Log> logs = logRepository.findAll();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        for (Log log : logs) {

            LogDTO dto = new LogDTO();

            String formatedDate = dateFormat.format(log.getDtregister());

            dto.setId(log.getLogId());
            dto.setUsername(log.getUsername());
            dto.setRole(log.getRole());
            dto.setDtRegister(formatedDate);
            dto.setOperation(log.getOperation());
            dto.setOldRegister(log.getOldRegister());
            dto.setNewRegister(log.getNewRegister());
            listDTO.add(dto);

        }

        return listDTO;

    }


    public List<LogDTO> listAllLogsEditor() {

        List<LogDTO> listDTO = new ArrayList<>();
        List<Log> logs = logRepository.findAll();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        for (Log log : logs) {

            LogDTO dto = new LogDTO();

            String formatedDate = dateFormat.format(log.getDtregister());

            dto.setId(log.getLogId());
            dto.setUsername(log.getUsername());
            dto.setRole(log.getRole());
            dto.setDtRegister(formatedDate);
            dto.setOperation(log.getOperation());
            dto.setOldRegister(log.getOldRegister());
            dto.setNewRegister(log.getNewRegister());
            listDTO.add(dto);

        }

        return listDTO;

    }



}
