package com.embraer.backend.chassis.service.cadastrarchassi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;

@Service
public class CadastrarChassiService implements CadastrarChassiImpl{

	@Autowired
	ChassisRepository chassisRepository;

	@Override
	public void cadastrarChassi(CadastrarChassiRequestDto cadastrarChassiRequestDto) {
				

	}
}
