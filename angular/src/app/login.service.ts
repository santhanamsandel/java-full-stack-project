import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from './Login';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  /*public LoginService(login:Login):Observable<any>
  {
    console.log("Inside LoginServiceComponent");
    return this.http.post<any>("http://localhost:8088/login",login, {responseType:'text' as 'json' })
  }*/
  public LoginService(login:Login): Observable<User>{
    return this.http.post<User>("http://localhost:8088/login",login);
  }

  public LogoutService():Observable<any>{
    return this.http.delete<any>("http://localhost:8088/logout/session");
  }
}




