package com.test.neon;

import javax.annotation.Resource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.test.neon.services.QuestionService;
import com.test.neon.services.TestService;

@SpringBootApplication
public class NeonApplication {
	@Resource
	private TestService testService;
	@Resource 
	private QuestionService questionService;

	public static void main(String[] args) {

		
		SpringApplication.run(NeonApplication.class, args);
	}

	
	
	

}
