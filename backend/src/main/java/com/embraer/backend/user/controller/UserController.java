package com.embraer.backend.user.controller;

import com.embraer.backend.user.dto.UserDTO;
import com.embraer.backend.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class UserController {

    @Autowired
    UserService userService;


    @CrossOrigin
    @GetMapping("list-all-editors")
    public List<UserDTO> listAllEditorsUsers() {

        return userService.showEditorUsers();

    }

    @CrossOrigin
    @GetMapping("list-all-pilots")
    public List<UserDTO> listAllPilotsUsers() {

        return userService.showPilotUsers();

    }

}
