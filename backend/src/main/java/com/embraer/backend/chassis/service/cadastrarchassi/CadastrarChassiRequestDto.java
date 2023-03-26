package com.embraer.backend.chassis.service.cadastrarchassi;

import com.embraer.backend.user.entity.User;

import lombok.Data;

@Data
public class CadastrarChassiRequestDto {
	
	private Long chassi_id;
	private Character chassi_status;
}
