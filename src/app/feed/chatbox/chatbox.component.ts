import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  chat_box_tgl:boolean=true;
  chat_box_list_tgl:boolean=true;
  private_chat:boolean=false;
  constructor() { }

  ngOnInit(): void {
  
  }
  
  one_chatbox()
  {
    if(this.private_chat)
    {
      this.private_chat=false;
    }
    else
    {
      this.private_chat=true;
    }
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

  toogle_ct_list()
  {

    if(this.chat_box_list_tgl)
    {
      this.chat_box_list_tgl=false;
    }
    else
    {
      this.chat_box_list_tgl=true;
    }
  }
}
