package com.embraer.backend.chassisUserOwner.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ChassisUserOwnerDTO {

    private Long id;
    private String owner;
    private Long chassis;

}
