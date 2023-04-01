package com.embraer.backend.serviceBulletin.service.listServiceBulletins;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListServiceBulletinsService implements ListServiceBulletinsImpl {

	@Autowired
	ServiceBulletinRepository serviceBulletinRepository;

	public List<ListServiceBulletinsResponse> execute(Long chassiId) {
		
		Chassis chassis = new Chassis();
		chassis.setChassiId(chassiId);

		List<ServiceBulletin> serviceBulletins = serviceBulletinRepository.findByChassiId(chassis);
		
		if(serviceBulletins == null) {
			throw new Error("BulletinsNotExist");
		}

		List<ListServiceBulletinsResponse> bulletinsResponse = new ArrayList<>();

		for (ServiceBulletin serviceBulletin : serviceBulletins) {
			
			ListServiceBulletinsResponse listServiceBulletinsResponse = new ListServiceBulletinsResponse();
			listServiceBulletinsResponse.setService_bulleti_name(serviceBulletin.getServiceBulletinName());
			listServiceBulletinsResponse.setStatus(serviceBulletin.getServiceBulletinStatus());
			listServiceBulletinsResponse.setPart(serviceBulletin.getServiceBulletinPart());
			bulletinsResponse.add(listServiceBulletinsResponse);
		}

		return bulletinsResponse;
	}

}
