import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.productService.getProductList().subscribe(products => this.products = products);
  }

  updateProduct(productId: number): void {
    this.router.navigate(['/updateproduct', productId]);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProductList();
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/admin');
  }
  
}
