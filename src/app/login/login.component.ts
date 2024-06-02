import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _subSink = new SubSink();

  loginFormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(20)]),
    password: new FormControl("", [Validators.minLength(5), Validators.required]),
    returnSecureToken: new FormControl(true),
  })

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnDestroy(){
    this._subSink.unsubscribe();
  }

  loginForm() {
    this._subSink.sink = this._loginService.login(this.loginFormGroup.value).subscribe({
      next: (res) => {
        alert("Kayıt Başarılı!");
        this._loginService.setIsLogin("true");
        this._router.navigateByUrl("home");
      },
      error: (err) => {
        alert("Giriş Yapılamadı!" + err);
        this._loginService.setIsLogin("false");
        this.loginFormGroup.reset();
      },
      complete: () => {
        // Subscribe tamamandıktan sonra çalışır!!!
      }
    })
  }
}
