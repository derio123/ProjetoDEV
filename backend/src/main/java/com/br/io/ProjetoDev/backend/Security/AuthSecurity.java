package com.br.io.ProjetoDev.backend.Security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class AuthSecurity extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(AuthenticationManagerBuilder  auth) throws Exception {
		auth.inMemoryAuthentication().withUser("common").password("{noop}123456").roles("USER").and()
		.withUser("admin").password("{noop}123456").roles("ADMIN");
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic().and().authorizeRequests().antMatchers(HttpMethod.GET, "/h2-console/**").hasRole("ADMIN")
		.antMatchers(HttpMethod.PUT, "/**").hasRole("ADMIN")
		.antMatchers(HttpMethod.POST, "/**").hasRole("ADMIN")
		.antMatchers(HttpMethod.DELETE, "/**").hasRole("ADMIN").and().csrf().disable();
	}
}
