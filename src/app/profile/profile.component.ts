import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private regininteration: ReginInteration  ) { 
    this.regininteration.feed_view(false);
  }
  ngOnInit() {
  }

}
