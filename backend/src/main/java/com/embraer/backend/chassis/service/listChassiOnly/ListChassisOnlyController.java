package com.embraer.backend.chassis.service.listChassiOnly;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embraer.backend.chassis.service.listChassiOnly.dto.ListChassisOnlyDto;

@RestController
@RequestMapping(value="/chassi/list/{id}")
public class ListChassisOnlyController {

	@Autowired
	ListChassisOnlyService listChassisOnlyService;
	
	@GetMapping
	public ResponseEntity<ListChassisOnlyDto> listChassisOnly(@PathVariable("id") Long chassiId){
		ListChassisOnlyDto listChassisOnlyDto = listChassisOnlyService.execute(chassiId);
		
		return ResponseEntity.status(HttpStatus.OK).body(listChassisOnlyDto);	
	}
}
