package com.embraer.backend.chassis.service.listChassis;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassis.service.listChassis.dto.ListChassisDto;

@Service
public class ListChassisService  {

	@Autowired
	ChassisRepository chassisRepository;
	
	public List<ListChassisDto> execute() {
		
		
		List<Chassis> listChassis = chassisRepository.findAll();
		
		if (listChassis==null || listChassis.isEmpty()) {
			throw new Error("ChassiNotExist");
		}
		
		List<ListChassisDto> listChassiDto = new ArrayList<ListChassisDto>();
		
		for (Chassis chassi: listChassis) {
			ListChassisDto listChassisDto = new ListChassisDto();
			listChassisDto.setChassi_id(chassi.getChassiId());
			listChassiDto.add(listChassisDto);
		}
			
		return listChassiDto;
	}

}
