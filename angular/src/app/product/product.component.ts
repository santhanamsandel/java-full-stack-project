import { Component } from '@angular/core';
import { Products } from '../Product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Products = new Products();

  constructor(private productService: ProductService, private router: Router) { }

  onSubmit() {
    console.log(this.product);
    this.saveProduct();
  }

  saveProduct() {
    this.productService.createProduct(this.product).subscribe(
      data => {
        console.log(data);
        this.goToProductList();
      },
      error => {
        console.log(error);
      }
    );
  }

  goToProductList() {
    this.router.navigate(['/productlist']);
  }

  goBack() {
    this.router.navigateByUrl('/admin');
  }
}