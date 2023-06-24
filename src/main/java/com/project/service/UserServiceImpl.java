package com.project.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.exception.ResourceNotFoundException;
import com.project.exception.UserAlreadyExists;
import com.project.model.User;
import com.project.repository.CurrentUserSessionDao;
import com.project.repository.UserDao;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao uDao;
	
	@Autowired
	private CurrentUserSessionDao cuserDao;

	@Override
	public User saveUer(User user) {		
		User u = uDao.findByMobile(user.getMobile());
		if(u==null) 
		{
			BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
			String enPassWrd=bcrypt.encode(user.getPassword());
			user.setPassword(enPassWrd);
			return uDao.save(user);
		}
		else throw new UserAlreadyExists("User Already Exists");
	}

	@Override
	public User updateUserCredential(User user, int key) {
		
		User user2=getByID(key);
		user2.setName(user.getName());
		user2.setMobile(user.getMobile());
		BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
		String enPassWrd=bcrypt.encode(user.getPassword());
		user2.setPassword(enPassWrd);
		
		//user2.setPassword(user.getPassword());
		
		return uDao.save(user2);
	}

	

	@Override
	public User getByID(int key) {
		
		return uDao.findById(key).orElseThrow(()->new ResourceNotFoundException("User","key",key)); 
	}

	@Override
	public List<User> getAllUser() {
		
		return uDao.findAll();
	}
	@Override
	public User loginUser(User user) {
		// TODO Auto-generated method stub
		return uDao.findByMobileAndPassword(user.getMobile(),user.getPassword());
	}
	@Override
	public String userLogout(int key) {
	    User user=getByID(key);
		uDao.delete(user);
		return "Logged Out successfully";
	}
}
