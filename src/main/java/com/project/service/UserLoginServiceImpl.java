package com.project.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.exception.CustomerNotFoundException;
import com.project.exception.ResourceNotFoundException;
import com.project.exception.UserAlreadyExists;
import com.project.model.CurrentUserSession;
import com.project.model.User;
import com.project.model.UserDTO;
import com.project.repository.CurrentUserSessionDao;
import com.project.repository.UserDao;

import net.bytebuddy.utility.RandomString;

@Service
public class UserLoginServiceImpl implements UserLoginService{
	
	@Autowired
	private CurrentUserSessionDao currentusersessionDao;
	
	@Autowired
	private UserDao uDao;

	@Override
	public User userLogin(UserDTO userDto) {
		
		System.out.println("inside userlogin service");
		User u = uDao.findByMobile(userDto.getMobileNo());
        System.out.println(userDto.getMobileNo());
        System.out.println(u.getMobile());
		if(u.getMobile()==null) {
			throw new CustomerNotFoundException("Mobile No not found");
		}
		Optional<CurrentUserSession> opt1 = currentusersessionDao.findById(u.getUserId());
		if(opt1.isPresent()) {
			throw new UserAlreadyExists("present");
		}
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
		if (bcrypt.matches(userDto.getPassword(), u.getPassword()))
		{
			String key = RandomString.make(6);
			CurrentUserSession currentUserSession = new CurrentUserSession(u.getUserId(), key,LocalDateTime.now());;
			currentusersessionDao.save(currentUserSession);
			
			return u;
			
		}else
			throw new CustomerNotFoundException("Invalid Password and Mobile Number");
	
	}

	@Override
	public String userLogout() {
		currentusersessionDao.deleteAll();
		return "Logout Successfull";
	}

	
	
	
	

	

	






	

}
	
	



