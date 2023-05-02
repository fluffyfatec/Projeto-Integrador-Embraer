package com.embraer.backend.chassis.service.listChassis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.embraer.backend.chassis.service.listChassis.dto.ListChassisDto;

@RestController
@RequestMapping
public class ListChassisController {

	@Autowired
	ListChassisService listChassisService;

	@CrossOrigin
	@GetMapping("/chassi/list")
	public ResponseEntity<List<ListChassisDto>> listChassisAdmin(){

		List<ListChassisDto> listChassisDto = listChassisService.executeAdmin();
		
		return ResponseEntity.status(HttpStatus.OK).body(listChassisDto);	
	}

	@CrossOrigin
	@GetMapping("/chassi/list/editor")
	public ResponseEntity<List<ListChassisDto>> listChassisEditor(){

		List<ListChassisDto> listChassisDto = listChassisService.executeEditor();

		return ResponseEntity.status(HttpStatus.OK).body(listChassisDto);
	}

	@CrossOrigin
	@GetMapping("/chassi/list/{pilot}")
	public ResponseEntity<List<ListChassisDto>> listChassisPilot(@PathVariable("pilot") String pilot){

		List<ListChassisDto> listChassisDto = listChassisService.executePilot(pilot);

		return ResponseEntity.status(HttpStatus.OK).body(listChassisDto);
	}

}
