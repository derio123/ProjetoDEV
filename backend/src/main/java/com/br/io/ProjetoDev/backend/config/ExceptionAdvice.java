package com.br.io.ProjetoDev.backend.config;

import com.br.io.ProjetoDev.backend.model.*;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {
	@ExceptionHandler(RuntimeException.class)
	public ApiResponse handleNotFoundException(RuntimeException ex) {
		ApiResponse apiResponse = new ApiResponse(400, "Bad request", null);
        return apiResponse;
	}
}
