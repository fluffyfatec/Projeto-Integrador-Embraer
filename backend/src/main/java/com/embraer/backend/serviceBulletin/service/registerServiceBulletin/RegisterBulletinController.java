package com.embraer.backend.serviceBulletin.service.registerServiceBulletin;

import java.util.List;

import com.embraer.backend.serviceBulletin.service.registerServiceBulletin.dto.ServiceBulletinRegisterDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/register/bulletin")
public class RegisterBulletinController {
	
	@Autowired
	RegisterBulletinService bulletinService;
	
	
	@PostMapping
 	public ResponseEntity<Void> registerBulletinService(@RequestBody List<ServiceBulletinRegisterDTO> serviceBulletinRegisterDTO){
		
		bulletinService.execute(serviceBulletinRegisterDTO);
			
		return new ResponseEntity<Void>(HttpStatus.CREATED);
		

	}

}
