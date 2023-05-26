package com.embraer.backend.notificationsSb.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class NotificationSbDTO {

    private Long id;

    private String user_modified;

    private String user_owner;

    private Long chassis_associate;

    private String sb_name;

    private String sb_part;

    private String operation;

    private String sb_status_change;

    private String item;

    private String item_status;

    private String date_register;


}
