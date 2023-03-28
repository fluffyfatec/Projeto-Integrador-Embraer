package com.embraer.backend.chassis.services.registerChassi.dto;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class ServiceBulletinRegisterDTO {
	
	@NotNull
	public Long bulletin_service; 

	@NotNull
	public Character Status;
	
	@NotNull
	public Long chassis;
}
