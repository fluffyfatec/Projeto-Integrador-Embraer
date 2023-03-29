package com.embraer.backend.serviceBulletin.listServiceBulletinsAll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embraer.backend.serviceBulletin.listServiceBulletinsAll.dto.ListServiceBulletinAllDto;

@RestController
@RequestMapping(value="/bulletin/list/all")
public class ListServiceBulletinsAllController {
	
	@Autowired
	ListServiceBulletinsAllService listServiceBulletinsAllService;
	
	@GetMapping
	public ResponseEntity<List<ListServiceBulletinAllDto>> listServiceBulletinsAll(){
		List<ListServiceBulletinAllDto> listServiceBulletinAllDto = listServiceBulletinsAllService.execute();
		return ResponseEntity.status(HttpStatus.OK).body(listServiceBulletinAllDto);
	}

	

}
