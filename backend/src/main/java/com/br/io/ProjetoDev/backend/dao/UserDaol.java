package com.br.io.ProjetoDev.backend.dao;

import com.br.io.ProjetoDev.backend.model.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface UserDaol extends CrudRepository<User, Integer> {
	User findBynome(String nome);
}
