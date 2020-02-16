import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit {
  user_claims;
  constructor(private regininteration: ReginInteration) { 
    this.regininteration.feed_view(true);
    this.regininteration.navbar_landingpage(true);
  }

  ngOnInit() {
    const helper = new JwtHelperService();
    let myRawToken=window.localStorage.getItem('a-t');
    const decodedToken = helper.decodeToken(myRawToken);
    this.user_claims=decodedToken['user_claims'];
  }

}
