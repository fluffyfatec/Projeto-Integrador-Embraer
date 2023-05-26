package com.embraer.backend.log.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class LogDTO {

    private Long id;

    private String username;

    private String role;

    private String DtRegister;

    private String operation;

    private String oldRegister;

    private String newRegister;

}
