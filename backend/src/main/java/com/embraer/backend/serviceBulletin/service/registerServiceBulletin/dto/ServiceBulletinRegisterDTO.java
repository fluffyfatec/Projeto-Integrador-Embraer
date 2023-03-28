package com.embraer.backend.serviceBulletin.service.registerServiceBulletin.dto;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class ServiceBulletinRegisterDTO {
	
	@NotNull
	public String bulletin_service; 

	@NotNull
	public String Status;
	
	@NotNull
	public Long chassis;
}
