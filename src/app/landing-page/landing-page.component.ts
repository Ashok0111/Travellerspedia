import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
import { ReginInteration } from '../interaction_service/regin_interation';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private regininteration: ReginInteration) {
   
   }

  ngOnInit() {
    this.regininteration.navbar_landingpage(false);
    this.regininteration.feed_view(false);
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image);
  }

}
