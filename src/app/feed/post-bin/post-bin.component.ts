import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-bin',
  templateUrl: './post-bin.component.html',
  styleUrls: ['./post-bin.component.css']
})
export class PostBinComponent implements OnInit {
  items=["test1","test2","test3"];
  constructor() { }

  ngOnInit() {
  }

}
