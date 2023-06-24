package com.project.service;

import java.util.List;

import com.project.model.MyOrder;
import com.project.model.Products;

public interface OrderService {

	public MyOrder addOrder(MyOrder order,Integer customerId,Integer addressId);
	
	public String addOrdernew(Integer customerId,Integer addressId,Integer productId,MyOrder order);

	public List<MyOrder>viewOrder();
	
	//public MyOrder viewOrderByCustomerId(Integer custiomerId);
	
	public List<MyOrder>findOrderByUserName(String FirstName,String LastName,String mobileNo);
	
	public MyOrder updateOrder(Integer custiomerId,MyOrder order);
	
	public String removeOrder(Integer custiomerId);
	
	public MyOrder addorderFromCart(Integer customerId);
	
	public List<Products> viewOrderByCustomerId(Integer custiomerId);
}
