import { Component, OnInit, ɵConsole } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
import { Subscription } from 'rxjs';

import * as jwt_decode from "jwt-decode";
import { posting_service } from '../services/services_post';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  feed_view=false;
  element=false;
  profile_control:boolean=false;
  transparent_fromview:boolean=false;
  search_object=[];
  search_result:boolean=false;
  transparent:boolean=false;
  feed_page: Subscription;
  landing_page_sub: Subscription;
  constructor(private posting_service_: posting_service,private regininteration: ReginInteration) {
this.profile_control=false;
    this.feed_page = this.regininteration.getFeedView().subscribe(feed_view => { 
      this.element = feed_view; 
    });
    this.landing_page_sub = this.regininteration.get_navbar_landingpage().subscribe(transparent_fromview => { 
      this.transparent = transparent_fromview; 
      
    });
   }
  ngOnInit() {
this.profile_control=false;
  }
  search_everything(search_obj)
  {
    let search_data={"search":search_obj.value}


if((search_obj.value)!='')
{
  
  this.posting_service_.search_service(search_data).subscribe((res) => {
    this.search_result=true;
    console.log(res,"result");
    this.search_object=res['data'];
        });
}
else{
  this.search_result=false;
}
    
  }
  logout()
  {
    
  }
  Profile_control(profile_control)
  {
    console.log(profile_control,"profile_control");
    if(!profile_control)
    {
      this.profile_control=true;
    }
  else{
    this.profile_control=false;
  }
  }
  ngOnDestroy() {
    this.feed_page.unsubscribe();
}
}
