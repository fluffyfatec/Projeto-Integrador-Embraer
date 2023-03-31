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
		
		List<String> listServiceBulletin = serviceBulletinRepository.findDistinctByServiceBulletinName();
		
		List<ListServiceBulletinAllDto> listServiceBulletinsAllDto = new ArrayList<ListServiceBulletinAllDto>();
		
		for (String bulletin: listServiceBulletin) {
			ListServiceBulletinAllDto listServiceBulletinAllDto = new ListServiceBulletinAllDto();
			listServiceBulletinAllDto.setService_bulletin_name(bulletin);
			listServiceBulletinsAllDto.add(listServiceBulletinAllDto);
		}
		
		return listServiceBulletinsAllDto;
			
	}
	

}
