package com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto;

import java.sql.Timestamp;

import javax.validation.constraints.NotNull;

import com.embraer.backend.chassis.entity.Chassis;

import lombok.Data;

@Data
public class ListBulletinNotApplicable {

	@NotNull
	private Long service_bulletin_id;

	@NotNull
	private String service_bulleti_name;

	@NotNull
	private Timestamp service_bulletin_register;

	@NotNull
	private String status_not_applicable;

	private String service_bulletin_part;

	@NotNull
	private Chassis chassi_id;

//	@NotNull
//	private String user_register_name;
//
//	@NotNull
//	private String user_change_name;
	
}