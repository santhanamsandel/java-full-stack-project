import { Component,OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user: User =new User();

  constructor(private userService:UserService,private router: Router){}
  
    ngOnInit(): void {
      
    }
    goBack(): void {
      this.router.navigateByUrl('/homepage');
    }
    saveuser(){
      this.userService.createUser(this.user).subscribe( data =>{
        console.log(data);
        this.goToUserList();
      },
      error => console.log(error));
    }
  
    goToUserList(){
      this.router.navigate(['/login']);
    }
    
    onSubmit(){
      console.log(this.user);
      this.saveuser();  }
}


