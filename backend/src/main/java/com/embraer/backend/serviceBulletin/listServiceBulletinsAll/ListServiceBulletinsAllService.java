package com.embraer.backend.serviceBulletin.listServiceBulletinsAll;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.listServiceBulletinsAll.dto.ListServiceBulletinAllDto;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;

@Service
public class ListServiceBulletinsAllService {

	@Autowired
	ServiceBulletinRepository serviceBulletinRepository;
	
	public List<ListServiceBulletinAllDto> execute() {
		
		List<ServiceBulletin> listServiceBulletin = serviceBulletinRepository.findAll();
		
		List<ListServiceBulletinAllDto> listServiceBulletinsAllDto = new ArrayList<ListServiceBulletinAllDto>();
		
		for (ServiceBulletin bulletin: listServiceBulletin) {
			ListServiceBulletinAllDto listServiceBulletinAllDto = new ListServiceBulletinAllDto();
			listServiceBulletinAllDto.setService_bulletin_name(bulletin.getServiceBulletinName());
			listServiceBulletinAllDto.setService_bulletin_part(bulletin.getServiceBulletinPart());

			
			listServiceBulletinsAllDto.add(listServiceBulletinAllDto);
		}
		
		return listServiceBulletinsAllDto;
			
	}
	

}
