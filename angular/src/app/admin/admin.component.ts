import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

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


}