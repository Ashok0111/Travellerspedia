import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
declare var $: any;
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
  
  show_sidebar()
  {
    $(".page-wrapper").addClass("toggled");
  }
    
  close_sidebar()
  {
    $(".page-wrapper").removeClass("toggled");
  }
}
