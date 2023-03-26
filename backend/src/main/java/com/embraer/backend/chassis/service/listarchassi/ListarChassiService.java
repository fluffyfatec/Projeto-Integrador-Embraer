package com.embraer.backend.chassis.service.listarchassi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;

@Service
public class ListarChassiService implements ListarChassiImpl{

	@Autowired
	ChassisRepository chassisRepository;

	@Override
	public void ListarChassi(ListarChassiRequestDto listarChassiRequestDto) {
		listarChassiRequestDto.setChassi_id(chassi_id);
	}
}
