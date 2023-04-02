package com.embraer.backend.serviceBulletin.service.listServiceBulletins;

import java.util.List;

import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/bulletins/listar/{id}")
public class ListServiceBulletinsController {
	
	@Autowired
	ListServiceBulletinsImpl listBulletinsService;

	@CrossOrigin
	@GetMapping
	public ResponseEntity<List<ListServiceBulletinsResponse>> listBulletins(@PathVariable("id") Integer chassi_id){
		
		Long id = Long.valueOf(chassi_id);
		
		List<ListServiceBulletinsResponse> serviceBulletinsResponses = listBulletinsService.execute(id);
		
		return ResponseEntity.status(HttpStatus.OK).body(serviceBulletinsResponses);
	}

}
