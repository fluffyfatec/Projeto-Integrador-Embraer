package com.embraer.backend.exceptionsHandling.implementations;

import java.io.IOException;

import com.embraer.backend.exceptionsHandling.dtos.ErrorInternalServerDTO;
import com.fasterxml.jackson.databind.exc.InvalidFormatException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorInternalServerHandler {
	
	 @Autowired
	  private MessageSource messageSource;

	  @ExceptionHandler({ RuntimeException.class, StackOverflowError.class, IllegalArgumentException.class,
	      ClassCastException.class, IOException.class, InvalidFormatException.class  })
	  @ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
	  public ErrorInternalServerDTO handle(Exception e) {
	    String message = messageSource.getMessage(
	        "InternalError",
	        null,
	        LocaleContextHolder.getLocale());

	    return new ErrorInternalServerDTO(message);
	  }

}
