import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../../interaction_service/regin_interation';
@Component({
  selector: 'app-profile-changepassword',
  templateUrl: './profile-changepassword.component.html',
  styleUrls: ['./profile-changepassword.component.css']
})
export class ProfileChangepasswordComponent implements OnInit {

  constructor(private regininteration: ReginInteration) { 
    this.regininteration.feed_view(true);
    this.regininteration.navbar_landingpage(true);
  }

  ngOnInit() {
  }

}
