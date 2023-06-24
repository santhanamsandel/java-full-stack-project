package com.project.service;

import com.project.model.User;
import com.project.model.UserDTO;

public interface UserLoginService {
	public User userLogin(UserDTO userDto);
	public String userLogout();

	

	//public User findByMobile(String mobile);



	

	
}
