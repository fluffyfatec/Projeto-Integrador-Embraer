package com.embraer.backend.serviceBulletin.listServiceBulletinsAll;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.listServiceBulletinsAll.dto.ListServiceBulletinAllDto;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;

@Service
public class ListServiceBulletinsAllService {

	@Autowired
	ServiceBulletinRepository serviceBulletinRepository;

	@Autowired
	UserSession userSession;

	@Autowired
	UserRepository userRepository;
	
	public List<ListServiceBulletinAllDto> executeAdmin() {

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

	public List<ListServiceBulletinAllDto> executeEditor() {

		UserAuthenticationDto userAuthenticationDto = userSession.getUserAuthentication();

		Long userId = userRepository.getUserIdByUserName(userAuthenticationDto.getUsername());

		List<ServiceBulletin> listServiceBulletin = serviceBulletinRepository.getServiceBulletinsEditor(userId);

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
