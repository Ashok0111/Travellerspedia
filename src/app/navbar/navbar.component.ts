import { Component, OnInit, ɵConsole } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
import { Subscription } from 'rxjs';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  feed_view=false;
  element=false;
  transparent_fromview:boolean=false;

  search_result:boolean=false;
  transparent:boolean=false;
  feed_page: Subscription;
  landing_page_sub: Subscription;
  constructor(private regininteration: ReginInteration) {

    this.feed_page = this.regininteration.getFeedView().subscribe(feed_view => { 
      this.element = feed_view; 
    });
    this.landing_page_sub = this.regininteration.get_navbar_landingpage().subscribe(transparent_fromview => { 
      this.transparent = transparent_fromview; 
      
    });
   }
  ngOnInit() {

  }
  search_everything(search_obj)
  {
if((search_obj.value)!='')
{
  this.search_result=true;
}
else{
  this.search_result=false;
}
    
  }
  ngOnDestroy() {
    this.feed_page.unsubscribe();
}
}
