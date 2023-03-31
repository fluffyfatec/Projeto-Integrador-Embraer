package com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto;

import java.sql.Timestamp;
import java.util.ArrayList;

import javax.validation.constraints.NotNull;

import com.embraer.backend.chassis.entity.Chassis;

import lombok.Data;

@Data
public class ListServiceBulletinsResponse {

	@NotNull
	private String service_bulleti_name;

	@NotNull
	private String status;
	
	@NotNull
	private String part;
	
}

