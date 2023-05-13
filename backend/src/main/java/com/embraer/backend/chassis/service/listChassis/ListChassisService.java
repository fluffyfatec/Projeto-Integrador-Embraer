package com.embraer.backend.chassis.service.listChassis;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.embraer.backend.chassi.services.ListChassisBySb.ListChassisBySbService;
import com.embraer.backend.chassi.services.ListChassisBySb.dto.ListChassiBySbDto;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
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

	@Autowired
	ListChassisBySbService listChassisBySbService;

	@Autowired
	ServiceBulletinRepository serviceBulletinRepository;
	
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

	public List<ListChassisDto> showChassisThatDontHaveOwner() {


		List<Chassis> listChassis = chassisRepository.getChassisThatDontHaveOwner();

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

	public List<ListChassisDto> showChassisThatDontHaveTheSbAdmin(String sb, String part) {


		List<Chassis> listChassis = chassisRepository.findAll();

		if (listChassis==null || listChassis.isEmpty()) {
			throw new Error("ChassiNotExist");
		}

		List<ListChassisDto> listChassiDto = new ArrayList<ListChassisDto>();

		Long sbId = serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(sb, part);

		List<Chassis> listChassis2 = chassisRepository.getChassisChassisThatDontHaveTheSbAdmin(sbId);

		listChassis.removeAll(listChassis2);

		for (Chassis chassi: listChassis) {
			ListChassisDto listChassisDto = new ListChassisDto();
			listChassisDto.setChassi_id(chassi.getChassiId());
			listChassiDto.add(listChassisDto);
		}

		return listChassiDto;
	}

	public List<ListChassisDto> showChassisThatDontHaveTheSbEditor(String sb, String part) {

		UserAuthenticationDto userAuthenticationDto = userSession.getUserAuthentication();

		Long userId = userRepository.getUserIdByUserName(userAuthenticationDto.getUsername());

		List<Chassis> listChassis = chassisRepository.getChassisEditor(userId);

		if (listChassis==null || listChassis.isEmpty()) {
			throw new Error("ChassiNotExist");
		}

		List<ListChassisDto> listChassiDto = new ArrayList<ListChassisDto>();

		Long sbId = serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(sb, part);

		List<Chassis> listChassis2 = chassisRepository.getChassisChassisThatDontHaveTheSbEditor(userId, sbId);

		listChassis.removeAll(listChassis2);

		for (Chassis chassi: listChassis) {
			ListChassisDto listChassisDto = new ListChassisDto();
			listChassisDto.setChassi_id(chassi.getChassiId());
			listChassiDto.add(listChassisDto);
		}

		return listChassiDto;
	}



}
