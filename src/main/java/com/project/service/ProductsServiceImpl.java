package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import com.project.exception.ProductNotFoundException;
import com.project.model.CategoryEnum;
import com.project.model.Products;
import com.project.model.ProductsDTO;
import com.project.model.User;
import com.project.repository.ProductsDao;

@Service
public class ProductsServiceImpl implements ProductsService{
	
	@Autowired
	private ProductsDao psDao;
	
	@Override
	public Products addProducts(Products products) {
		// TODO Auto-generated method stub
		
		return psDao.save(products);
		
	}

	@Override
	public List<Products> getAllProducts() {
		// TODO Auto-generated method stub
		List<Products> list = psDao.findAll();
		
		if (list.size() > 0) {
			return list;
		} else
			throw new ProductNotFoundException("No products in catalog");
	}

	@Override
	public Products getProductsFromCatalogById(Integer id) {
		Optional<Products> opt = psDao.findById(id);
		if (opt.isPresent()) {
			return opt.get();
		}

		else
			throw new ProductNotFoundException("Product not found with given id");
	}

	@Override
	public List<ProductsDTO> getCategoryWiseProducts(CategoryEnum cat) {
		
		List<ProductsDTO> result= psDao.getCategoryWiseProducts(cat);
		
		return result;
	}

	@Override
	public String deleteProductFromCatalog(Integer id) throws ProductNotFoundException {
		
		Optional<Products> opt=	psDao.findById(id);
			
		if(opt.isPresent()) {
				Products prod = opt.get();
				psDao.delete(prod);
				return "Product deleted from catalog";
			} else
				throw new ProductNotFoundException("Product not found with given id");
	}

	

	@Override
	public Products updateProductInCatalog(Products product, int key) throws ProductNotFoundException {
		 Optional<Products> optionalProduct = psDao.findById(key);

		    if (optionalProduct.isPresent()) {
		        Products existingProduct = optionalProduct.get();
		        existingProduct.setProductName(product.getProductName());
		        existingProduct.setPrice(product.getPrice());
		        existingProduct.setSpecification(product.getSpecification());
		        existingProduct.setManufacturer(product.getManufacturer());
		        existingProduct.setQuantity(product.getQuantity());
		        existingProduct.setCategory(product.getCategory());

		        Products updatedProduct = psDao.save(existingProduct);
		        return updatedProduct;
		    } else {
		        throw new ProductNotFoundException("Product not found with the given id");
		    }
		}

	

	

	
	
	
}