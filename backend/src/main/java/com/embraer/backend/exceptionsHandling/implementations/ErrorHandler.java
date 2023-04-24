package com.embraer.backend.exceptionsHandling.implementations;

import com.embraer.backend.exceptionsHandling.dtos.ErrorDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandler {
	
	@Autowired
	private MessageSource messageSource;
	
	@ExceptionHandler({Error.class})
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	public ErrorDTO handle(Error exception) {
		
		String message = messageSource.getMessage(exception.getMessage(), null, LocaleContextHolder.getLocale());
		
		return new ErrorDTO(message);
		
	}

}
