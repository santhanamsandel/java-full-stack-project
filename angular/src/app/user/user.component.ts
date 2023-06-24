import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private loginService:LoginService,private route:Router) { }


  logout() {
     this.backlogout();
    this.loginService.LogoutService().subscribe(data => {
      console.log(data);
  
})



}

backlogout()
{
  console.log("backkkkk")
  this.route.navigateByUrl('/homepage');
}

public showProduct()
{
  this.route.navigateByUrl('/show-product');
}

public addDetails()
{
  this.route.navigateByUrl('/add-customer');
}


}
