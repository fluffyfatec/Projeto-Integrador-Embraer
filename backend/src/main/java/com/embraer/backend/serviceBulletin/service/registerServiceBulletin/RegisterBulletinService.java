package com.embraer.backend.serviceBulletin.service.registerServiceBulletin;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
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
	private ChassiServiceBulletinRepository chassiServiceBulletinRepository;

	@Autowired
	private VerifyPart verifyPart;

	public void execute(List<ServiceBulletinRegisterDTO> serviceBulletinRegisterDTO) {

		List<ChassiServiceBulletin> service = new ArrayList<>();

		for (ServiceBulletinRegisterDTO serviceDTO : serviceBulletinRegisterDTO) {

			Chassis exist = chassisRepository.findById(serviceDTO.getChassis()).orElse(null);


			if (exist == null) {
				
				User user = new User();
				user.setUserId(2L);


				char status = 'A';
				
				Chassis chassis = new Chassis();
				
				chassis.setChassiId(serviceDTO.getChassis());
				chassis.setChassiStatus(status);
				chassis.setUserRegister(user);
				
				chassisRepository.saveAndFlush(chassis);
				
			}

			VerifyDTO serviceInfo = verifyPart.verifyPart(serviceDTO.getBulletin_service());

			if (serviceBulletinRepository.findByServiceBulletinNameAndServiceBulletinPart(serviceInfo.getBulletin(), serviceInfo.getPart()) == null) {

				ServiceBulletin serviceBulletin = new ServiceBulletin();

				serviceBulletin.setServiceBulletinName(serviceInfo.getBulletin());
				serviceBulletin.setServiceBulletinDtRegister(new Timestamp(System.currentTimeMillis()));
				serviceBulletin.setServiceBulletinPart(serviceInfo.getPart());
				serviceBulletin.setUserRegister(null);

				serviceBulletinRepository.saveAndFlush(serviceBulletin);

			}

			ServiceBulletin serviceBulletin = serviceBulletinRepository
					.findByServiceBulletinNameAndServiceBulletinPart(serviceInfo.getBulletin(), serviceInfo.getPart());
			
			Chassis chassiExist = new Chassis();
			chassiExist.setChassiId(serviceDTO.getChassis());
			
			ChassiServiceBulletin chassiServiceBulletin = new ChassiServiceBulletin();
			chassiServiceBulletin.setChassiId(chassiExist);
			chassiServiceBulletin.setServiceBulletinId(serviceBulletin);
			chassiServiceBulletin.setServiceBulletinStatus(serviceDTO.getStatus());
			service.add(chassiServiceBulletin);
			
		}

		chassiServiceBulletinRepository.saveAllAndFlush(service);


	}
}

