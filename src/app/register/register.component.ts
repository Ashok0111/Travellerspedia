import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReginInteration } from '../interaction_service/regin_interation';
import { registration_service } from '../services/auth.services';
import {Router} from "@angular/router";
import Notiflix from "notiflix-angular";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[registration_service]
})
export class RegisterComponent implements OnInit {

  constructor(private regininteration: ReginInteration,public register_user: registration_service,private router: Router) { 
    this.regininteration.navbar_landingpage(true);
    this.regininteration.feed_view(false);
  }

  ngOnInit() {
    this.register_user.registration_model={
      fname: "" ,
      lname: "" ,
      email: "" ,
      username: "" ,
      gender:"",
      password:"",

    }
    Notiflix.Notify.Init({
      width:'300px',
      timeout: 5000,
      position:'right-bottom',
      cssAnimationStyle: 'from-bottom',
      distance:'15px',
      opacity: 0.75,
    });
  }
  onSubmit(form : NgForm)
  {
    this.register_user.registration_process(form.value).subscribe((res) => {
    console.log(res,"Result");
    if(res["status"]=="Success")
    {
      Notiflix.Notify.Success('Félicitations !!!! Profile Created Successfully.');
      this.router.navigate(['/login']);
    }
        });

  }

}
