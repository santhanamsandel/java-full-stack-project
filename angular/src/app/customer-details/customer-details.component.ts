import { Component } from '@angular/core';
import {  Address, Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent  {
  customer: Customer = new Customer();
  // address:Address=new Address();
  addresses: any[] = [];
  CustomerId:any;
  AddressId:any;
  constructor(private customerService: CustomerService, private router: Router) { }
  
  onSubmit() {
    console.log(this.customer);
    this.saveCustomer();
    
    
  }
  addAddress() {
    this.customer.addresses.push(new Address());
  }

  removeAddress(index: number) {
    this.customer.addresses.splice(index, 1);
  }

  saveCustomer() {
     this.customerService.createCustomer(this.customer).subscribe(
      data => {
        console.log(data);
       this.CustomerId=data.customerId;
      console.log(this.CustomerId);
     this.goToproductList();
       this.AddressId=data.addresses[0].addressId;
         console.log(this.AddressId);
      this.goToOrderList();
      
        
},
      error => {
        console.log(error);
      }
    );
  }

 public  goToproductList() {
  
  this.router.navigate(['/showproduct',this.CustomerId]);
 
  }
  public goToOrderList() {

    
    this.router.navigate(['/showproduct', this.CustomerId], {
      queryParams: { addressId: this.AddressId }
    });
  }
 

  goBack() {
    this.router.navigateByUrl('/user');
  }
}