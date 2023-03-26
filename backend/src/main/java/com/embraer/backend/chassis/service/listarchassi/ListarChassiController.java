package com.embraer.backend.chassis.service.listarchassi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/chassi/listar")
public class ListarChassiController {
	
	@Autowired
	ListarChassiImpl listarChassiImpl;

	@PostMapping
	public ResponseEntity<Void> ListarrChassiController(@RequestBody ListarChassiRequestDto listarChassiRequestDto) {
		listarChassiImpl.listarChassi(listarChassiRequestDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
}
