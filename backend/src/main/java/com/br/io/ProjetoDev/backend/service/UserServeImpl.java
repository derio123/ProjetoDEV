package com.br.io.ProjetoDev.backend.service;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.io.ProjetoDev.backend.dao.UserDaol;
import com.br.io.ProjetoDev.backend.model.User;
import com.br.io.ProjetoDev.backend.model.UserDto;
import com.br.io.ProjetoDev.backend.service.UserService;

@Transactional
@Service(value = "userService")
public class UserServeImpl implements UserService {
	
	@Autowired
	private UserDaol userDaol;
	
	public List<User> findAll() {
		List<User> list = new ArrayList<>();
		userDaol.findAll().iterator().forEachRemaining(list::add);
		return list;
	}
	
	public void excluir(int id) {
		userDaol.deleteById(id);
	}

	public User findOne(String nome) {
		return userDaol.findBynome(nome);
	}
	
	public User findById(int id) {
		Optional<User> optionalUser = userDaol.findById(id);
		return optionalUser.isPresent() ? optionalUser.get() : null;
	}

  
	public UserDto update(UserDto userDto) {
        User user = findById(userDto.getId());
        if(user != null) {
            BeanUtils.copyProperties(userDto, user, "password", "username");
            userDaol.save(user);
        }
        return userDto;
    }

    public User save(UserDto user) {
	    User newUser = new User();
	    newUser.setNome(user.getNome());
	    newUser.setCpf(user.getCpf());
	    newUser.setTelefone(user.getTelefone());
	    newUser.setEndereco(user.getEndereco());
		newUser.setEmail(user.getEmail());
        return userDaol.save(newUser);
    }
}
