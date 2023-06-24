import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = "http://localhost:8088/customers/add";

  constructor(private http: HttpClient) { }

  public getCustomerList(): Observable<any> {
    return this.http.get("http://localhost:8088/customer/allcustomers");
  }

  public createCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.url, customer);
  }

  public updateCustomer(customerId: number, customer: Customer): Observable<any> {
    return this.http.put(`http://localhost:8088/customer/updatecustomer/${customerId}`, customer);
  }

  public deleteCustomer(customerId: number): Observable<Object> {
    return this.http.delete(`http://localhost:8088/customer/deletecustomer/${customerId}`);
  }

  public getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8088/customer/customer/${customerId}`);
  }
}
