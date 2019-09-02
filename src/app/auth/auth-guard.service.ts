import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{
  token : AuthService;
  constructor(public authservice:AuthService,private router: Router,) { }
  ngOnInit() {
  }
  
  canActivate(): Promise<boolean> 
  {
    return new Promise((resolve) => {
      this.authservice.send_token().then((res) => {
        console.log(res,"promise");
          if(res['status']!= "Success")
          {
            resolve(false);
            this.router.navigateByUrl('/login');
          }
          else if(res['status']== "Success"){
            resolve(true);
          }
        })
        .catch(err => {
          console.log("error");
          resolve(false);
        });
      })
  }
      
  }