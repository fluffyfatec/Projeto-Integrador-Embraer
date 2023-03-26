package com.embraer.backend.chassis.service.listarchassi;

import java.sql.Timestamp;

import com.embraer.backend.user.entity.User;

import lombok.Data;

@Data
public class ListarChassiRequestDto {
	
	private Long chassi_id;
	private String chassi_status;
	private String user_register;
	private Timestamp chassi_dtregister;
}
