package com.embraer.backend.chassis.service.listChassis.dto;

import java.sql.Timestamp;
import java.util.ArrayList;

import javax.validation.constraints.NotNull;

import com.embraer.backend.user.entity.User;

import lombok.Data;

@Data
public class ListChassisDto {
	
	@NotNull
	private Long chassi_id;

	//@NotNull
	//private String chassi_status;

	//@NotNull
	//private Timestamp chassi_register;

	//@NotNull
	//private User user_register;
	
	//@NotNull
	//private ArrayList<ListChassisDto> chassi_list;

}
