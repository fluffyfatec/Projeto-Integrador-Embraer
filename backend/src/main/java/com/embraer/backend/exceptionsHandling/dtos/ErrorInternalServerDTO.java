package com.embraer.backend.exceptionsHandling.dtos;

import lombok.Getter;

@Getter
public class ErrorInternalServerDTO {
	
	public ErrorInternalServerDTO(String message) {
		this.message = message;
	}

	private String message;
	
	

}
