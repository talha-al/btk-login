import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerFormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
    returnSecureToken: new FormControl(true),
  })
  
  constructor(private _loginService: LoginService) { }

  registerForm() {
    this._loginService.register(this.registerFormGroup.value).subscribe(result => {
      console.log(result);
    })
  }
}
