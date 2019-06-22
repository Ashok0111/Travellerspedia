import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private regininteration: ReginInteration) { }

  ngOnInit() {
  }
  login()
  {
    this.regininteration.show_login(true);
  }
  register()
  {
    this.regininteration.show_registration(true);
  }
}
