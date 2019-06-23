import { Component, OnInit } from '@angular/core';
import { ReginInteration } from 'src/app/interaction_service/regin_interation';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private regininteration: ReginInteration) { 
    this.regininteration.feed_view(false);
  }

  ngOnInit() {
  }

}
