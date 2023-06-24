import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Products } from './Product';
import { Customer } from './Customer';
import { MyOrder } from './MyOrder';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  customer:any;
  product:any;
  
  
  private url = "http://localhost:8088/admin";

  constructor(private http: HttpClient) { }

  addToCart(productId: number,CustomerId:number) {
    return this.http.post(`http://localhost:8088/Cart/addtocart/${productId}/${CustomerId}`,{},{responseType:'text' as 'json' });
  }
  


  orderProduct(customerId: number,addressId: number,productId: number,myOrder:MyOrder): Observable<any>
  {

    return this.http.post(`http://localhost:8088/order/new/${customerId}/${addressId}/${productId}`,myOrder,{responseType:'text' as 'json' });

  }

  getCategories(category:String): Observable<any> {
    return this.http.get(`http://localhost:8088/admin/products/${category}`); // Uptedate the URL to fetch categories
  }
  
  getProductList(): Observable<any> {
    return this.http.get(`${this.url}/allproducts`);
  }

  createProduct(product: Products): Observable<any> {
    return this.http.post(this.url, product);
  }

  updateProduct(productId: number, product: Products): Observable<any> {
    return this.http.put(`${this.url}/updateproducts/${productId}`, product);
  }

  deleteProduct(productId: number): Observable<Object> {
    return this.http.delete(`${this.url}/deleteproduct/${productId}`);
  }

  getProductById(productId: number): Observable<Products> {
    return this.http.get<Products>(`${this.url}/product/${productId}`);
  }
  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8088/customers/${customerId}`);
  }

 
  getOrderProduct(customerId:number): Observable<any> {
    return this.http.get<Products>(`http://localhost:8088/order/findByCustomerId/${customerId}`);
  }

}