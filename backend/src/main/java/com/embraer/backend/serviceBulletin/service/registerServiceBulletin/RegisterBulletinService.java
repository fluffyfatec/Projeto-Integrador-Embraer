package com.embraer.backend.serviceBulletin.service.registerServiceBulletin;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.service.registerServiceBulletin.dto.ServiceBulletinRegisterDTO;
import com.embraer.backend.serviceBulletin.service.registerServiceBulletin.dto.VerifyDTO;
import com.embraer.backend.serviceBulletin.service.registerServiceBulletin.util.VerifyPart;


@Service
public class RegisterBulletinService {

	@Autowired
	private ServiceBulletinRepository serviceBulletinRepository;

	@Autowired
	private VerifyPart verifyPart;

	public void execute(List<ServiceBulletinRegisterDTO> serviceBulletinRegisterDTO) {

		List<ServiceBulletin> service = new ArrayList<>();

		for(ServiceBulletinRegisterDTO serviceDTO: serviceBulletinRegisterDTO) {

			VerifyDTO serviceInfo = verifyPart.verifyPart(serviceDTO.getBulletin_service());

			ServiceBulletin serviceBulletin = new ServiceBulletin();

			Chassis chassis = new Chassis();
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