package com.br.io.ProjetoDev.backend.controller;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.io.ProjetoDev.backend.model.*;

public interface UserRepository extends JpaRepository<User, Long> {

}
