package com.project.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.User;
import com.project.model.UserDTO;
import com.project.service.UserLoginService;
import com.project.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/")
public class UserController {

	@Autowired
	private UserService uService;
	
	@Autowired
	private UserLoginService ulogService;
	
	@GetMapping()
	public List<User> getAllUser(){
		
		return uService.getAllUser();
	}
	
	@PostMapping()
    public ResponseEntity<User> saveUserController(@Valid @RequestBody User user) {
		User responseUser =  uService.saveUer(user);
		return new  ResponseEntity<User>(responseUser, HttpStatus.CREATED);
	}
	
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User>getByID(@PathVariable("id") Integer id) {
		
		User prod =  uService.getByID(id);

		return new ResponseEntity<User>(prod, HttpStatus.FOUND);

	}
	
	
	/*@PostMapping("login/new")
	public  ResponseEntity<User> loginUser(@RequestBody User user)
	{
	return new ResponseEntity<User>( uService.loginUser(user),HttpStatus.OK);
	
	}*/
	
	
	@PostMapping("/login")
	public ResponseEntity<User> userLoginController( @RequestBody UserDTO userDto) {
		System.out.println("inside userlogin controller");
		User msg =  ulogService.userLogin(userDto);
		
		return new ResponseEntity<User>(msg,HttpStatus.ACCEPTED);
	}
	
	    @DeleteMapping("/logout/session")
	    public ResponseEntity<String> userLogoutController() {
		String  Str=  ulogService.userLogout();		
		return new ResponseEntity<String>(Str,HttpStatus.ACCEPTED);
	}
	
	
	
	
	
	
	
	@PutMapping("/update/{key}")
	public ResponseEntity<User> updateUserCredentialController(@Valid @RequestBody User user, @PathVariable int key) {
		User responseUser =  uService.updateUserCredential(user, key);
		return new ResponseEntity<User>(responseUser,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/logout/{key}")
	public ResponseEntity<String> userLogoutController(@Valid @PathVariable int key) {
		String msg =  uService.userLogout(key);
		return new ResponseEntity<String>(msg,HttpStatus.ACCEPTED);
	
	}
	
	   
	
	



	
	
	

}
