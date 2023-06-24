import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ShowProductsComponent } from './show-products/show-products.component';

import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    UpdateuserComponent,
    UserlistComponent,
    AdminComponent,
    UserComponent,
    ProductComponent,
    ProductlistComponent,
    UpdateproductComponent,
    CustomerDetailsComponent,
    ShowProductsComponent,
  
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
