package com.br.io.ProjetoDev.backend.service;

import java.util.List;

import com.br.io.ProjetoDev.backend.model.User;
import com.br.io.ProjetoDev.backend.model.UserDto;

public interface UserService {
	User save(UserDto user);
	List<User> findAll();
	void excluir(int id);
	
	User findOne(String nome);
	
	User findById(int id);
	
	UserDto update(UserDto userDto);
	
}
