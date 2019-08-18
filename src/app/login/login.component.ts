import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _show_top:boolean=true;
  constructor(private regininteration: ReginInteration) {
    this.regininteration.navbar_landingpage(true);
    this.regininteration.feed_view(false);
   }

  ngOnInit() {
  }
  reset_email()
  {
    this._show_top=false;
  }
}
