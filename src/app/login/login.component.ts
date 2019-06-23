import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private regininteration: ReginInteration) {
    
   }

  ngOnInit() {
  
  }

}
