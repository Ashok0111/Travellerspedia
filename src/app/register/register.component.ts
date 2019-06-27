import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private regininteration: ReginInteration) { 
    this.regininteration.navbar_landingpage(true);
    this.regininteration.feed_view(false);
  }

  ngOnInit() {
    
  }

}
