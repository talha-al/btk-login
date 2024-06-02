import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerFormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    returnSecureToken: new FormControl(true),
  })

  constructor(private _loginService: LoginService, private _router:Router) { }

  registerForm() {
    this._loginService.register(this.registerFormGroup.value).subscribe({
      next: (res) => {
        alert("Kayıt Başarılı!");
        this._router.navigateByUrl("login");
      },
      error: (err) => {
        alert("Kayıt Edilemedi" + err);
      },
      complete: () => {
        // Subscribe tamamandıktan sonra çalışır!!!
      }
    }

    )
  }
}
