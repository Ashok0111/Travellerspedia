import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
import { registration_service } from '../services/auth.services';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[registration_service]
})
export class LoginComponent implements OnInit {
  _show_top:boolean=true;
  constructor(private regininteration: ReginInteration,public register_user: registration_service,private router: Router) {
    this.regininteration.navbar_landingpage(true);
    this.regininteration.feed_view(false);
   }

  ngOnInit() {
    this.register_user.login_model={
      email: "" ,
      password:"",
    }
  }
  reset_email()
  {
    this._show_top=false;
  }
  onSubmit(form : NgForm)
  {
    this.register_user.Login_process(form.value).subscribe((res) => {
      console.log(res);
      if(res["status"]=="Success")
      {
        localStorage.setItem('a-t', res["access-token"]);
        localStorage.setItem('r-t', res["refresh-token"]);
        this.router.navigate(['/feed/feedroll']);
      }
        });

  }
}
