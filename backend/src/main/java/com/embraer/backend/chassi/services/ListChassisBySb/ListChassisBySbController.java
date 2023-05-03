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
@RequestMapping
public class ListChassisBySbController {

	@Autowired
	ListChassisBySbService listChassisBySbService;
	
	@CrossOrigin
	@GetMapping("/chassi/sb/{sb}/{part}")
	public ResponseEntity<List<ListChassiBySbDto>>listChassiByDtoAdmin(@PathVariable("sb") String name_sb,
			@PathVariable("part") String part_sb) {
		
		List<ListChassiBySbDto> listChassiBySbDtos = listChassisBySbService.executeAdmin(name_sb,part_sb);
		return ResponseEntity.status(HttpStatus.OK).body(listChassiBySbDtos);

	}

	@CrossOrigin
	@GetMapping("/chassi/sb/editor/{sb}/{part}")
	public ResponseEntity<List<ListChassiBySbDto>>listChassiByDtoEditor(@PathVariable("sb") String name_sb,
																  @PathVariable("part") String part_sb) {

		List<ListChassiBySbDto> listChassiBySbDtos = listChassisBySbService.executeEditor(name_sb,part_sb);
		return ResponseEntity.status(HttpStatus.OK).body(listChassiBySbDtos);

	}

}
