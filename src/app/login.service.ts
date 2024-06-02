import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBT0E17yVuRz80JMh_1nfIm2wnZnwdvNZs"
  registerUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBT0E17yVuRz80JMh_1nfIm2wnZnwdvNZs"

  constructor(private _http: HttpClient) { }

  register(body: any): Observable<any> {
    return this._http.post(this.registerUrl, body);
  }

  login(body: any): Observable<any> {
    return this._http.post(this.loginUrl, body);
  }

  getIsLogin() {
    const isLogin = JSON.parse(localStorage.getItem("isLogin")!);
    return isLogin;
  }

  setIsLogin(isLogin: string) {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }
}
