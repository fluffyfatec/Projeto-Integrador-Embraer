package com.embraer.backend.chassis.service.listChassis;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassis.service.listChassis.dto.ListChassisDto;

@Service
public class ListChassisService  {

	@Autowired
	ChassisRepository chassisRepository;

	@Autowired
	UserSession userSession;

	@Autowired
	UserRepository userRepository;
	
	public List<ListChassisDto> executeAdmin() {
		
		
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

	public List<ListChassisDto> executeEditor() {

		UserAuthenticationDto userAuthenticationDto = userSession.getUserAuthentication();

		Long userId = userRepository.getUserIdByUserName(userAuthenticationDto.getUsername());

		List<Chassis> listChassis = chassisRepository.getChassisEditor(userId);

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

	public List<ListChassisDto> executePilot(String username) {

		Long pilotId = userRepository.getUserIdByUserName(username);

		List<Chassis> listChassis = chassisRepository.getChassisPilot(pilotId);

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
