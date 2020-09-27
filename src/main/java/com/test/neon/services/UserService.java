package com.test.neon.services;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.test.neon.models.User;
import com.test.neon.repository.UserRepository;

@Service
public class UserService {
	@Resource
	private UserRepository userRepository;
	public void saveUser(User user) {
		userRepository.save(user);
	}
	

}
