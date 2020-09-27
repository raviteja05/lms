package com.test.neon.page.controller;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.test.neon.models.User;
import com.test.neon.services.UserService;

@Controller
public class LoginController {
	@Resource 
	private PasswordEncoder passwordEncoder;
	@Resource
	private UserService userService;
	@Resource 
	private AuthenticationProvider authenticationProvider;
	
	@RequestMapping(path="/auth/login",method = RequestMethod.POST)
	public ResponseEntity<String> doAuth(@RequestBody User user) {
		
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}
	@RequestMapping(path="/register",method = RequestMethod.POST)
	public ResponseEntity<String> doRegister(@RequestBody User user) {
		if(user==null)
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		String encryptedPassword=passwordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		userService.saveUser(user);
		
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}
	
	
	

}
