package com.embraer.backend.exceptionsHandling.implementations;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.exceptionsHandling.dtos.ErrorValidateDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Order(Ordered.HIGHEST_PRECEDENCE)
@RestControllerAdvice
public class ErrorsValidateHandler {
	
	@Autowired
	private MessageSource messageSource;
	
	@ExceptionHandler
	@ResponseStatus
	@ResponseBody
	public List<ErrorValidateDTO> handle(MethodArgumentNotValidException exception){
		List<ErrorValidateDTO> errors = new ArrayList<>();
		
		List<FieldError> fieldErrors = exception.getBindingResult().getFieldErrors();
		
		fieldErrors.forEach(exc -> {
		
			String message = messageSource.getMessage(exc, LocaleContextHolder.getLocale());
			
			ErrorValidateDTO error = new ErrorValidateDTO(exc.getField(), message);
			
			errors.add(error);
		
		});
				
		return errors; 
	}

}
