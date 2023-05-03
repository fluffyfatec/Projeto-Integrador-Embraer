package com.embraer.backend.serviceBulletin.listServiceBulletinsAll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embraer.backend.serviceBulletin.listServiceBulletinsAll.dto.ListServiceBulletinAllDto;


@RestController
@RequestMapping
public class ListServiceBulletinsAllController {
	
	@Autowired
	ListServiceBulletinsAllService listServiceBulletinsAllService;

	@CrossOrigin
	@GetMapping("/bulletin/list/all")
	public ResponseEntity<List<ListServiceBulletinAllDto>> listServiceBulletinsAllAdmin(){
		List<ListServiceBulletinAllDto> listServiceBulletinAllDto = listServiceBulletinsAllService.executeAdmin();
		return ResponseEntity.status(HttpStatus.OK).body(listServiceBulletinAllDto);
	}

	@CrossOrigin
	@GetMapping("/bulletin/list/all/editor")
	public ResponseEntity<List<ListServiceBulletinAllDto>> listServiceBulletinsAllEditor(){
		List<ListServiceBulletinAllDto> listServiceBulletinAllDto = listServiceBulletinsAllService.executeEditor();
		return ResponseEntity.status(HttpStatus.OK).body(listServiceBulletinAllDto);
	}

	

}
