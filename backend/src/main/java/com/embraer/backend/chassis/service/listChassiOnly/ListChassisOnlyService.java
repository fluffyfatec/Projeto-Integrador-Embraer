package com.embraer.backend.chassis.service.listChassiOnly;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassis.service.listChassiOnly.dto.ListChassisOnlyDto;

@Service
public class ListChassisOnlyService {

	@Autowired
	ChassisRepository chassisRepository;
	
	public ListChassisOnlyDto execute(Long chassiId ) {	
		Chassis chassis = new Chassis();
		chassis.setChassiId(chassiId);

		Chassis listChassis = chassisRepository.findById(chassiId).orElse(null);
		
		if (listChassis==null) {
			throw new Error("ChassiOnlyNotExist");
		}
		
		ListChassisOnlyDto listChassisOnlyDto = new ListChassisOnlyDto();
		listChassisOnlyDto.setChassi_id(listChassis.getChassiId());
				
		return listChassisOnlyDto;
	}

}
