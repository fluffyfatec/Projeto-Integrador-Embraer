package com.embraer.backend.user.service;

import com.embraer.backend.user.dto.UserDTO;
import com.embraer.backend.user.entity.User;
import com.embraer.backend.user.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<UserDTO> showEditorUsers() {

        List<UserDTO> listDTO = new ArrayList<>();

        List<User> users = userRepository.getAllEditorUsers();

        for (User user : users) {
            UserDTO dto = new UserDTO();

            dto.setUsername(user.getUserUsername());

            listDTO.add(dto);
        }

        return listDTO;

    }

    public List<UserDTO> showPilotUsers() {

        List<UserDTO> listDTO = new ArrayList<>();

        List<User> users = userRepository.getAllPilotUsers();

        for (User user : users) {
            UserDTO dto = new UserDTO();

            dto.setUsername(user.getUserUsername());

            listDTO.add(dto);
        }

        return listDTO;

    }

}
