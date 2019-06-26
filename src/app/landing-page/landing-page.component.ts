import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image);
  }

}
