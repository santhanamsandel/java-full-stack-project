import { Component, OnInit } from '@angular/core';

import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any; // Initialize the 'users' property as an empty array

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.getUserlist();
  }

  public getUserlist(): void {
    this.userService.getUserlist().subscribe(data => {this.users = data,console.log(this.users)});
  }

 
  updateUser(userId:number){
    this.router.navigate(['/update-user/'+userId]);
  }

  deleteUser(userId: number){
    this.userService.deleteUser(userId).subscribe( data => {
      console.log(data);
      //this.getUserlist();
      this.router.navigate(['/userlist',userId]);
    })

  


  }

  goBack(): void {
    this.router.navigateByUrl('/admin');
  }
}



