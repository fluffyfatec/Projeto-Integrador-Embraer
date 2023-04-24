package com.embraer.backend.serviceBulletin.service.listServiceBulletins;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListServiceBulletinsService implements ListServiceBulletinsImpl {

	@Autowired
	private ServiceBulletinRepository serviceBulletinRepository;

	@Autowired
	private ChassiServiceBulletinRepository chassiServiceBulletinRepository;

	public List<ListServiceBulletinsResponse> execute(Long chassiId) {
		
		Chassis chassis = new Chassis();
		chassis.setChassiId(chassiId);
		
		List<ChassiServiceBulletin> serviceBulletins = chassiServiceBulletinRepository.findByChassiId(chassis);

		if(serviceBulletins == null) {
			throw new Error("BulletinsNotExist");
		}

		List<ListServiceBulletinsResponse> bulletinsResponse = new ArrayList<>();

		for (ChassiServiceBulletin serviceBulletin : serviceBulletins) {
			
			ServiceBulletin bulletins = serviceBulletinRepository.findById(serviceBulletin.getServiceBulletinId().getServiceBulletinId()).orElse(null);
			
			ListServiceBulletinsResponse listServiceBulletinsResponse = new ListServiceBulletinsResponse();
			listServiceBulletinsResponse.setService_bulleti_name(bulletins.getServiceBulletinName());
			listServiceBulletinsResponse.setStatus(serviceBulletin.getServiceBulletinStatus());
			listServiceBulletinsResponse.setPart(bulletins.getServiceBulletinPart());
			bulletinsResponse.add(listServiceBulletinsResponse);
		}

		return bulletinsResponse;
	}

}
