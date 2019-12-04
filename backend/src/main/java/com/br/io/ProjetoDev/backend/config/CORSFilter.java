package com.br.io.ProjetoDev.backend.config;

import java.io.IOException;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;

public class CORSFilter implements Filter {
	
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException{
		System.out.println("Fitrando ....");
		HttpServletResponse response = (HttpServletResponse) res;
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
		response.setHeader("Access-Control-Allow-MAX-AGE", "3600");
		response.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization,"
				+ " Origin, Accept, Access-Control-Request-Method,"
				+ " Access-Control-Request-Headers");
				chain.doFilter(req, res);
	}
	
	public void init(FilterConfig filterConfig) {}
	public void destroy() {}
}
