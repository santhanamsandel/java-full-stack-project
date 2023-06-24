package com.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.model.Cart;
import com.project.model.Products;

@Service
public interface CartService {
		

	
	public Cart AddProduct(Cart cart,Integer Productid,Integer customerId);
	
	public Cart UpdateCartProduct(Cart cart);
	
	public String deleteProductfromCart(Integer id);
	
	public void deleteAllCart();
	

	
	public void removeCartById(int Cart_id);
	
	public List<Cart> ViewAllCart();
	
	
	
}
