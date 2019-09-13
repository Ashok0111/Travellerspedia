import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

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
