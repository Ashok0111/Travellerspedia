import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ChatService } from 'src/app/services/chat.service';
import { Observable, Subscription ,of} from 'rxjs';
import { MessageObject } from '../../service_models/auth.model';
import { posting_service } from '../../services/services_post';
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
  res_len=0;
  chat_users=[];
  messageList:  MessageObject[] = [];
  rc_ack$: Observable<string[]>;
  s_u$: Observable<string[]>;
  receive_typing$: Observable<boolean>;
  currentDoc: string;
  dyn_var:string;
  name_placeholder:string='';
  private _docSub: Subscription;
  constructor(private chatService: ChatService,private posting_service_: posting_service ) { }
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
  this.posting_service_.get_chatlist().then((get_chatlist) => {
    if(get_chatlist['code']==200)
    {
      this.chat_users=get_chatlist['users'];
      this.res_len=this.chat_users.length;

    }
  });  

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
    
      this.private_chat=true;
      this.message_area='';
      this.chatService.createnewRoom();
      this.name_placeholder=this.chat_users[user_ix]['name'];
    
  }
  close_ctbx()
  {
    this.private_chat=false;
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
      this.name_placeholder='';
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
