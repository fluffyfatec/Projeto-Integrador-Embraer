package com.embraer.backend.serviceBulletin.service.registerServiceBulletin;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.service.registerServiceBulletin.dto.ServiceBulletinRegisterDTO;
import com.embraer.backend.serviceBulletin.service.registerServiceBulletin.dto.VerifyDTO;
import com.embraer.backend.serviceBulletin.service.registerServiceBulletin.util.VerifyPart;
import com.embraer.backend.user.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RegisterBulletinService {

	@Autowired
	private ServiceBulletinRepository serviceBulletinRepository;

	@Autowired
	private ChassisRepository chassisRepository;

	@Autowired
	private VerifyPart verifyPart;

	public void execute(List<ServiceBulletinRegisterDTO> serviceBulletinRegisterDTO) {

		List<ServiceBulletin> service = new ArrayList<>();

		for (ServiceBulletinRegisterDTO serviceDTO : serviceBulletinRegisterDTO) {
			
		

			Chassis exist = chassisRepository.findById(serviceDTO.getChassis()).orElse(null);
			
			Chassis chassis = new Chassis();

			if (exist == null) {
				User user = new User();
				user.setUserId(1L);
				
				char status = 'A';

				chassis.setChassiId(serviceDTO.getChassis());
				chassis.setChassiStatus(status);
				chassis.setUserRegister(user);

				chassisRepository.saveAndFlush(chassis);
			}
			
			

			VerifyDTO serviceInfo = verifyPart.verifyPart(serviceDTO.getBulletin_service());

			ServiceBulletin serviceBulletin = new ServiceBulletin();

			chassis.setChassiId(serviceDTO.getChassis());
			serviceBulletin.setChassiId(chassis);
			serviceBulletin.setServiceBulletinName(serviceInfo.getBulletin());
			serviceBulletin.setServiceBulletinPart(serviceInfo.getPart());
			serviceBulletin.setServiceBulletinStatus(serviceDTO.getStatus());
			service.add(serviceBulletin);

		}
		serviceBulletinRepository.saveAllAndFlush(service);

	}
}
