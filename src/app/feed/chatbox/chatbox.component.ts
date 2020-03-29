import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  chat_box_tgl:boolean=true;
  constructor() { }

  ngOnInit(): void {
  
  }
  toogle_ct_bx()
  {

    if(this.chat_box_tgl)
    {
      this.chat_box_tgl=false;
    }
    else
    {
      this.chat_box_tgl=true;
    }
  }
}
