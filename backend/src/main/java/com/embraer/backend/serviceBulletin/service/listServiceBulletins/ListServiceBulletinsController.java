package com.embraer.backend.serviceBulletin.service.listServiceBulletins;

import java.util.List;

import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/bulletins/listar/{id}")
public class ListServiceBulletinsController {
	
	@Autowired
	ListServiceBulletinsImpl listBulletinsService;
	
	@GetMapping
	public ResponseEntity<List<ListServiceBulletinsResponse>> listBulletins(@PathVariable("id") Long chassi_id){
		
		List<ListServiceBulletinsResponse> serviceBulletinsResponses = listBulletinsService.execute(chassi_id);
		
		return ResponseEntity.status(HttpStatus.OK).body(serviceBulletinsResponses);
	}

}
