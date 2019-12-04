package com.br.io.ProjetoDev.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.br.io.ProjetoDev.backend.dao.*;
import com.br.io.ProjetoDev.backend.model.*;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Bean
    public CommandLineRunner init(UserDaol userDaol){
        return args -> {
            User user1 = new User();
            user1.setNome("Detiar");
            user1.setCpf("900048933");
            user1.setEndereco("QR839 bloco g loja 78");
            user1.setEmail("detiar@gmail.com");
            user1.setTelefone("437949650");
            userDaol.save(user1);

            User user2 = new User();
            user2.setNome("Derio");
            user2.setCpf("900048933");
            user2.setEndereco("QR239 bloco g loja 78");
            user2.setEmail("derio@gmail.com");
            user2.setTelefone("893305");
            userDaol.save(user2);
            
            User user3 = new User();
            user3.setNome("Derio");
            user3.setCpf("900048933");
            user3.setEndereco("QR239 bloco g loja 78");
            user3.setEmail("derio@gmail.com");
            user3.setTelefone("893305");
            userDaol.save(user3);
        };
    }
	}
