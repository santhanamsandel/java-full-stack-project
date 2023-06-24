import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer';
import { CategoryEnum } from '../Product';
import { MyOrder } from '../MyOrder';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent  implements OnInit {
  products: any;
  customer: Customer = new Customer();
   categories: CategoryEnum[] = [];
  filteredProducts: any[] = []; // Add this line to store the filtered products
  CustomerId:any;
  AddressId:any;
  
  constructor(private productService: ProductService, private router: Router,private activateroute:ActivatedRoute) { }
 myOrder:MyOrder = new MyOrder(new Date,"");

  ngOnInit(): void {
    this.getProductList();
    this.getCategories(); 
   //this.CustomerId=this.activateroute.snapshot.params['CustomerId'];
   //this.AddressId=this.activateroute.snapshot.params['AddressId'];
    this.CustomerId = this.activateroute.snapshot.paramMap.get('CustomerId');
    this.AddressId = this.activateroute.snapshot.queryParamMap.get('addressId');
  }

  

  addToCart(productId: number, customerId?: number): void {
    {
      this.productService.addToCart(productId,this.CustomerId).subscribe(
        (response) => {
          console.log('Product added to cart:', response);
          alert("Cart ADD Successfull");
        
        },
        (error) => {
          console.error('Error adding product to cart:', error);
          alert("Can you Add Your Details");
          this.router.navigateByUrl('/add-customer');
        }
      );
    }
  }

  orderProduct(productId:number): void {
    {
      this.productService.orderProduct(this.CustomerId,this.AddressId,productId,this.myOrder)
      .subscribe((response) =>{
        console.log(this.CustomerId)
          console.log('Product added to order:',response);
          alert("Order Placed----It will be Delevry in 3 days");
          this.router.navigate(['/order-list',this.CustomerId]);
        },
        (error) => {
          console.error('Error adding product to cart:',error);
          alert("Can you Add Your Details");
           this.router.navigateByUrl('/add-customer');
        }
      );
    }
  }


  getCategories(): void {
    this.categories = Object.values(CategoryEnum); // Get the values of the CategoryEnum
  }
  getProductList(): void {
    this.productService.getProductList().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...this.products]; // Initialize filteredProducts with all products
    });
  }
  filterProductsByCategory(category: CategoryEnum): void {
    if (category === CategoryEnum.MOBILES) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.MOBILES);
    } else if (category === CategoryEnum.LAPTOP) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.LAPTOP);
    } else if (category === CategoryEnum.TABLET) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.TABLET);
    } else if (category === CategoryEnum.SMARTTV) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.SMARTTV);
    } else if (category === CategoryEnum.CAMERA) {
      this.filteredProducts = this.products.filter((product: any) => product.category === CategoryEnum.CAMERA);
    } else {
      this.filteredProducts = [...this.products]; 
    }
  }
 
  goBack(): void {
    this.router.navigateByUrl('/user');
  }

  goBackToUser()
  {
    this.router.navigateByUrl('/user');
  }




}