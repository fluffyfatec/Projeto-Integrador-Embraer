package com.embraer.backend.chassis.service.listChassis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embraer.backend.chassis.service.listChassis.dto.ListChassisDto;

@RestController
@RequestMapping(value="/chassi/list")
public class ListChassisController {

	@Autowired
	ListChassisService listChassisService;

	@CrossOrigin
	@GetMapping
	public ResponseEntity<List<ListChassisDto>> listChassis(){
		List<ListChassisDto> listChassisDto = listChassisService.execute();
		
		return ResponseEntity.status(HttpStatus.OK).body(listChassisDto);	
	}
}
