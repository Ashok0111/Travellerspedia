import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReginInteration } from '../interaction_service/regin_interation';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-regin',
  templateUrl: './regin.component.html',
  styleUrls: ['./regin.component.css']
})
export class ReginComponent implements OnInit {
  login =false;
  register=false;
  subscription: Subscription;
  subscription_register: Subscription;
  constructor(private regininteration: ReginInteration) { 

  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
