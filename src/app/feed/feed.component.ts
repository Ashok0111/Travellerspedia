import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private regininteration: ReginInteration) { 
    this.regininteration.feed_view(true);
    this.regininteration.navbar_landingpage(true);
  }

  ngOnInit() {

}
  

}
