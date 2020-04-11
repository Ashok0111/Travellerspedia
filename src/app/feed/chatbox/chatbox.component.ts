import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ChatService } from 'src/app/services/chat.service';
import { Observable, Subscription ,of} from 'rxjs';
import { MessageObject } from '../../service_models/auth.model';
import {  ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})

export class ChatboxComponent implements OnInit   {
  chat_box_tgl:boolean=true;
  txtbox_focus:boolean=true;
  chat_box_list_tgl:boolean=true;
  private_chat:boolean=false;
  minimize:boolean=false;
  maximize:boolean=true;
  typing:boolean=false;
  message_area: string;
  is_typing=false;
  messageList:  MessageObject[] = [];
  rc_ack$: Observable<string[]>;
  s_u$: Observable<string[]>;
  receive_typing$: Observable<boolean>;
  currentDoc: string;
  dyn_var:string;
  private _docSub: Subscription;
  constructor(private chatService: ChatService) { }
  // ngAfterViewChecked(){
  //   this.elemnt.nativeElement.focus();
  //  }
  // @ViewChild('myInput') elemnt; 
  ngOnInit() {
    
    this.rc_ack$ = this.chatService.rc_ack$;
    this.s_u$ = this.chatService.s_u$;
    this.receive_typing$ = this.chatService.receive_typing$;
    
    this.s_u$.subscribe(res =>  this.messageList.push({'type':'receiver',"message":res.toString()}));
    this.receive_typing$.subscribe(typings =>  this.is_typing=typings);
  //  this._docSub = this.chatService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
  }

  onKeyPress(event: any) {
   
    if((this.message_area).length!=0)
    {
      this.typing=true;
      this.chatService.send_typing(this.typing);
    }
    else{
      this.typing=false;
      this.chatService.send_typing(this.typing);
    }
    
};
  sendMessage() {
    if((this.message_area).trim()!='')
    {
    this.chatService.send_message(this.message_area);
    this.messageList.push({'type':'sender',"message":this.message_area});
    this.message_area='';
    this.typing=false;
    this.chatService.send_typing(this.typing);
    }
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
      this.message_area='';
      this.chatService.createnewRoom();
      
    }
  }
  toogle_ct_bx()
  {

    if(this.chat_box_tgl)
    {
      this.chat_box_tgl=false;
      this.minimize=true;
      this.maximize=false;
    }
    else
    {
      this.chat_box_tgl=true;
      this.minimize=false;
      this.maximize=true;
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
