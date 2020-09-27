package com.test.neon.security.service;

import javax.annotation.Resource;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.test.neon.models.User;
import com.test.neon.repository.UserRepository;
import com.test.neon.security.AppUserDetails;

public class AppUserDetailsService implements UserDetailsService{
	@Resource
	private UserRepository userRepository;
	

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.getUserById(username);
		if (user == null) {
            throw new UsernameNotFoundException("Could not find user");
        }
		AppUserDetails appUserDetails=new AppUserDetails();
		appUserDetails.setUser(user);
		return appUserDetails;
	}

}
