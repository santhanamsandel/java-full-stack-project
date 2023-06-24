import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  login: Login=new Login("","");
  verify:User = new User();
  //users: any;
 constructor(private loginService:LoginService,private route:Router,private router: Router) { }
  ngOnInit(): void {
}
    goBack(): void {
      this.router.navigateByUrl('/homepage');
    }
    back()
    {
      this.route.navigate(['/homepage'])
    }
  
userLogin()
  {
    console.log("UserLogincomponent");
  this.loginService.LoginService(this.login).subscribe(
    data =>{console.log("Login succes",data),this.verify=data,console.log(this.verify.role)
    this.verifyUser();
    }
  );
  }
  public verifyUser(){
    if(this.verify.role=="ADMIN"){
      this.route.navigate(['/admin']);
    }
    else{
      this.route.navigate(['/user']);
    }
  }











}