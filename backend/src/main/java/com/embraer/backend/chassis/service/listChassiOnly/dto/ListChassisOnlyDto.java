package com.embraer.backend.chassis.service.listChassiOnly.dto;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class ListChassisOnlyDto {
		
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
