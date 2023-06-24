import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { UserUpdate } from './UserUpdate';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url="http://localhost:8088/user"
  constructor(private http:HttpClient) { }
  
public getUserlist()
{
return this.http.get("http://localhost:8088/");

}

public createUser(user: User): Observable<any>{
  return this.http.post('http://localhost:8088/',user);
}

public updateUser(userId: number, user: User): Observable<any>{
  return this.http.put(`http://localhost:8088/update/${userId}`,user);
}

deleteUser(userId: number): Observable<Object>{
  return this.http.delete(`http://localhost:8088/logout/${userId}`);
}


  public getUserById(userId:number):Observable<User>{
    return this.http.get<User>(`${this.url}/${userId}`);
  }
}






