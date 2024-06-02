import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  if(loginService.getIsLogin()==="true") return true;
  else{
    router.navigateByUrl("/login");
    return false;
  } 
};

