import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  feed_view=false;
  element=false;
  feed_page: Subscription;
  constructor(private regininteration: ReginInteration) {

    this.feed_page = this.regininteration.getFeedView().subscribe(feed_view => { 
      this.element = feed_view; 
    });
   }

  ngOnInit() {

  }
  ngOnDestroy() {
    this.feed_page.unsubscribe();
}
}
