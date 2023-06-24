package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.MyOrder;
import com.project.model.Products;
import com.project.service.OrderService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/order")
public class OrderController {
	
	

	@Autowired
	private OrderService orderservice;
	
   @PostMapping("/{customerId}/{addressId}")
	public ResponseEntity<MyOrder>addorder(@PathVariable Integer customerId,@PathVariable Integer addressId,@RequestBody MyOrder order){
		MyOrder uporder= orderservice.addOrder(order, customerId, addressId);
		return new ResponseEntity<MyOrder>(uporder,HttpStatus.ACCEPTED);
	}
   
   
   @PostMapping("/new/{customerId}/{addressId}/{productId}")
	public ResponseEntity<String>addordernew(@PathVariable Integer customerId,@PathVariable Integer addressId,@PathVariable Integer productId,@RequestBody MyOrder order ){
		System.out.println("new order");
	   String uporder= orderservice.addOrdernew(customerId, addressId,productId,order);
		return new ResponseEntity<String>(uporder,HttpStatus.ACCEPTED);
	}

	@PostMapping("/addFromCart/{customerId}")
	public ResponseEntity<MyOrder>addOrderFromCart(@PathVariable Integer customerId){
		MyOrder myOrder=orderservice.addorderFromCart(customerId);
		return new ResponseEntity<MyOrder>(myOrder,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/findallOrder")
	public ResponseEntity<List<MyOrder>>viewAllOrder(){
		List<MyOrder>allOrder= orderservice.viewOrder();
		return new ResponseEntity<List<MyOrder>>(allOrder,HttpStatus.ACCEPTED);
	}

	@GetMapping("/findByCustomerId/{customerId}") 
	  public ResponseEntity<List<Products>> viewOrderByCustomerID(@PathVariable Integer
	  customerId){ 
		  List<Products>product=orderservice.viewOrderByCustomerId(customerId); 
		  return new ResponseEntity<List<Products>>(product,HttpStatus.ACCEPTED); 
	  }
	
	@GetMapping("/findOrderByUserName/{FirstName}/{LastName}/{mobileNo}")
	public ResponseEntity<List<MyOrder>>viewByUserName(@PathVariable("FirstName") String FirstName,@PathVariable("LastName") String LastName,@PathVariable("mobileNo") String mobileNo ){
		List<MyOrder>getOrderByName= orderservice.findOrderByUserName(FirstName, LastName,mobileNo);
		return new ResponseEntity<List<MyOrder>>(getOrderByName,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("removeOrder/{customerId}")
	public ResponseEntity<String>removeOrderByCustomerID(@PathVariable Integer customerId){
		String findOrder=orderservice.removeOrder(customerId);
		
		return new ResponseEntity<String>(findOrder,HttpStatus.ACCEPTED);
	}
}
