import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  products: any;
  customerId:any;


  constructor(private productService: ProductService, private router: Router,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.customerId=this.activateroute.snapshot.params['CustomerId'];
    console.log("*******");
    console.log(this.customerId);
    this.getProductList();
  }

  getProductList(): void {
    this.productService.getOrderProduct(this.customerId).subscribe(products => this.products = products);
  }

  goBack(): void {
    this.router.navigateByUrl('/user');
  }
}
