package com.embraer.backend.chassi.services.ListChassisBySb;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.chassi.services.ListChassisBySb.dto.ListChassiBySbDto;
import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;

@Service
public class ListChassisBySbService {

	@Autowired
	private ServiceBulletinRepository serviceBulletinRepository;

	@Autowired
	private ChassisRepository chassisRepository;
	
	@Autowired
	private ChassiServiceBulletinRepository chassiServiceBulletinRepository;

	@Autowired
	UserSession userSession;

	@Autowired
	UserRepository userRepository;

	public List<ListChassiBySbDto> executeAdmin(String sb, String part) {
		
		ServiceBulletin serviceBulletin = serviceBulletinRepository.findByServiceBulletinNameAndServiceBulletinPart(sb, part);
		
		List<ChassiServiceBulletin> chassiServiceBulletins = chassiServiceBulletinRepository.findByServiceBulletinId(serviceBulletin);

		List<ListChassiBySbDto> listChassiBySbDto = new ArrayList<>();

		for (ChassiServiceBulletin chassiServiceBulletin : chassiServiceBulletins) {
			
			Chassis chassis = chassisRepository.findById(chassiServiceBulletin.getChassiId().getChassiId()).orElse(null);
			ListChassiBySbDto listChassiBySb = new ListChassiBySbDto();
			listChassiBySb.setChassi(chassis.getChassiId());
			listChassiBySb.setSb_status(chassiServiceBulletin.getServiceBulletinStatus());
			listChassiBySbDto.add(listChassiBySb);
		}
		return listChassiBySbDto;
	}

	public List<ListChassiBySbDto> executeEditor(String sb, String part) {

		UserAuthenticationDto userAuthenticationDto = userSession.getUserAuthentication();

		Long userId = userRepository.getUserIdByUserName(userAuthenticationDto.getUsername());

		ServiceBulletin serviceBulletin = serviceBulletinRepository.findByServiceBulletinNameAndServiceBulletinPart(sb, part);

		List<ChassiServiceBulletin> chassiServiceBulletins = chassiServiceBulletinRepository.findByServiceBulletinIdEditor(serviceBulletin.getServiceBulletinId(), userId);

		List<ListChassiBySbDto> listChassiBySbDto = new ArrayList<>();

		for (ChassiServiceBulletin chassiServiceBulletin : chassiServiceBulletins) {

			Chassis chassis = chassisRepository.findById(chassiServiceBulletin.getChassiId().getChassiId()).orElse(null);
			ListChassiBySbDto listChassiBySb = new ListChassiBySbDto();
			listChassiBySb.setChassi(chassis.getChassiId());
			listChassiBySb.setSb_status(chassiServiceBulletin.getServiceBulletinStatus());
			listChassiBySbDto.add(listChassiBySb);
		}
		return listChassiBySbDto;


	}



}
