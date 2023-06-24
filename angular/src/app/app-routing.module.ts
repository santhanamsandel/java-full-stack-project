import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginComponent } from './login/login.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [

  {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'userlist', component:UserlistComponent},
   {path:"register",component:RegisterComponent},
   {path:"login",component:LoginComponent},
   {path:'update-user/:userId',component:UpdateuserComponent},
   {path:'admin',component:AdminComponent},
   {path:'user',component:UserComponent},
   {path:'add-product',component:ProductComponent},
   {path:'productlist',component:ProductlistComponent},
   {path:'updateproduct/:productId',component:UpdateproductComponent},
   {path:'add-customer',component:CustomerDetailsComponent},
   {path:'showproduct/:CustomerId',component:ShowProductsComponent},
   {path:'order-list/:CustomerId',component:OrderListComponent},
   //{path:'show-product/:CustomerId/:AddressId',component:ShowProductsComponent}
   {path:'show-product',component:ShowProductsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }