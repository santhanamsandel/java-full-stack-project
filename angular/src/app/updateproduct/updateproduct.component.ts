import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductUpdate } from '../ProductUpdate';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  productId: number = 0;
  product: ProductUpdate = new ProductUpdate();

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    //this.getProductById();
   this.productService.getProductById(this.productId).subscribe(data=>{
      this.product = data;});
  
  }

  getProductById(): void {
   
  }

  onSubmit(): void {
    this.productService.updateProduct(this.productId, this.product).subscribe(data=>{
      console.log("Product updated");
      this.goToProductList();
    });
  }

  goToProductList(): void {
    this.router.navigate(['/productlist']);
  }

  goBack(): void {
    this.router.navigateByUrl('/productlist');
  }
}
