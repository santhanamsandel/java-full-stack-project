package com.project.service;

import java.util.List;

import com.project.model.User;

public interface UserService {
	
	public User saveUer(User user);
	
	public User updateUserCredential(User user,int key);
	
	
	public User getByID(int key);

	public List<User> getAllUser();
	public User loginUser(User user);

	
	public String userLogout(int key);
	
}
