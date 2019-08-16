import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReginInteration } from '../interaction_service/regin_interation';
import { registration_service } from '../services/auth.services';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[registration_service]
})
export class RegisterComponent implements OnInit {

  constructor(private regininteration: ReginInteration,public register_user: registration_service) { 
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
  }
  onSubmit(form : NgForm)
  {
    this.register_user.registration_process(form.value).subscribe((res) => {
    console.log(res,"Result");
        });

  }

}
