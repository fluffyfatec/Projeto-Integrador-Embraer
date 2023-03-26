package com.embraer.backend.chassis.service.cadastrarchassi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/chassi/cadastrar")
public class CadastrarChassiController {
	
	@Autowired
	CadastrarChassiImpl cadastrarChassiImpl;

	@PostMapping
	public ResponseEntity<Void> CadastrarChassiController(@RequestBody CadastrarChassiRequestDto cadastrarChassiRequestDto) {
		cadastrarChassiImpl.cadastrarChassi(cadastrarChassiRequestDto);
		System.out.println("deu certo");
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
}
