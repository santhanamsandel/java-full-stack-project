package com.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.model.User;
import com.project.repository.UserDao;


@Service
public class CustomUserDetailsService implements UserDetailsService{
	@Autowired
	private UserDao userRepository;

	@Override
	//Predefined UserDetailsService interface has loadUserByUsername method 
	//Overriding this method here to get out user details from database 
	//UserDetails is predefined interface which contains default username and password 
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user=userRepository.findByname(username);//connecting to database by using userrepository	
		if(user==null)
		{
			throw new UsernameNotFoundException("User Not Found");
			
		}
		return new CustomUserDetails(user);//sending userdetails information to the WebSecurityconfiguration 
	}

	
}
