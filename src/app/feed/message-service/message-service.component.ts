import { Component, OnInit } from '@angular/core';
import { posting_service } from '../../services/services_post';
import { ChatService } from 'src/app/services/chat.service';
import { Observable, Subscription ,of} from 'rxjs';
import { MessageObject } from '../../service_models/auth.model';
import {AfterViewChecked, ElementRef, ViewChild} from '@angular/core'
@Component({
  selector: 'app-message-service',
  templateUrl: './message-service.component.html',
  styleUrls: ['./message-service.component.css']
})
export class MessageServiceComponent implements OnInit,AfterViewChecked {
  chat_box_tgl:boolean=true;
  txtbox_focus:boolean=true;
  chat_box_list_tgl:boolean=true;
  private_chat:boolean=true;
  minimize:boolean=false;
  maximize:boolean=true;
  typing:boolean=false;
  message_area: string;
  name_placeholder:string;
  is_typing=false;
  res_len=0;
  clearfix_selected=[];
  messageList:  MessageObject[] = [];
  rc_ack$: Observable<string[]>;
  s_u$: Observable<string[]>;
  receive_typing$: Observable<boolean>;
  currentDoc: string;
  dyn_var:string;
  private _docSub: Subscription;
  // tslint:disable-next-line: variable-name
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(private posting_service_: posting_service ,private chatService: ChatService) { }
chat_users=[];
  ngOnInit() {
    this.name_placeholder='';
    this.posting_service_.get_chatlist().then((get_chatlist) => {
      if(get_chatlist['code']==200)
      {
        this.chat_users=get_chatlist['users'];
        this.res_len=this.chat_users.length;
        for(let i=0;i<this.res_len;i++)
        {
          this.clearfix_selected.push(false);
        }
      }
    });
    this.rc_ack$ = this.chatService.rc_ack$;
    this.s_u$ = this.chatService.s_u$;
    this.receive_typing$ = this.chatService.receive_typing$;
    
    this.s_u$.subscribe(res =>  this.messageList.push({'type':'receiver',"message":res.toString()}));
    this.receive_typing$.subscribe(typings =>  this.is_typing=typings);
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

  one_chatbox(user_ix)
  {
    //clearfix_selected
      this.private_chat=false;
      this.message_area='';
      for(let i=0;i<this.res_len;i++)
      {
        this.clearfix_selected[i]=false;
      }
      this.clearfix_selected[user_ix]=true;
      this.chatService.createnewRoom();
     this.name_placeholder=this.chat_users[user_ix]['name'];
     this.message_area='';
     this.typing=false;
     this.messageList=[];
     this.scrollToBottom();
}
ngAfterViewChecked() {        
  this.scrollToBottom();        
} 
scrollToBottom(): void {
  try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  } catch(err) { }                 
}
}

