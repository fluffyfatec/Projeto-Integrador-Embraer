package com.embraer.backend.chassi.services.ListChassisBySb;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embraer.backend.chassi.services.ListChassisBySb.dto.ListChassiBySbDto;

@RestController
@RequestMapping(value = "/chassi/sb/{sb}/{part}")
public class ListChassisBySbController {

	@Autowired
	ListChassisBySbService listChassisBySbService;
	
	@CrossOrigin
	@GetMapping
	public ResponseEntity<List<ListChassiBySbDto>>listChassiByDto(@PathVariable("sb") String name_sb,
			@PathVariable("part") String part_sb) {
		
		List<ListChassiBySbDto> listChassiBySbDtos = listChassisBySbService.execute(name_sb,part_sb);
		return ResponseEntity.status(HttpStatus.OK).body(listChassiBySbDtos);

	}

}
