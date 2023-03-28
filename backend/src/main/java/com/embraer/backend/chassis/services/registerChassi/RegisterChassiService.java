package com.embraer.backend.chassis.services.registerChassi;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassis.services.registerChassi.dto.ServiceBulletinRegisterDTO;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterChassiService {
	
	@Autowired
	ServiceBulletinRepository serviceBulletinRepository;
	
	public void execute(List<ServiceBulletinRegisterDTO> chassiRegisterDTO) {
		
		List<ServiceBulletin> service = new ArrayList<>();
		
		for(ServiceBulletinRegisterDTO serviceDTO: chassiRegisterDTO) {
			
			ServiceBulletin serviceBulletin = new ServiceBulletin();
			
			Chassis chassis = new Chassis();
			chassis.setChassiId(serviceDTO.getChassis());
			
			serviceBulletin.setChassiId(chassis);
			serviceBulletin.setServiceBulletinId(serviceDTO.getBulletin_service());
			service.add(serviceBulletin);
		
		}
		serviceBulletinRepository.saveAllAndFlush(service);
	}
}
