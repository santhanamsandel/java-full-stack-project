import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdate } from '../UserUpdate';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userId!:number;
  users:User=new User();
 
  
  constructor(private userService:UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    console.log(this.userId)
  this.userService.getUserById(this.userId).subscribe(data=>{
      this.users=data;
    },error=>console.log(error));
  
  }

  
  
  onSubmit(){
    this.userService.updateUser(this.userId, this.users).subscribe( data =>{ console.log("updated"),
      this.goToUserList()
    }
    );
  }

  goToUserList(){
    this.router.navigate(['/userlist']);
  }

  goBack(): void {
    this.router.navigateByUrl('/admin');
  }


}