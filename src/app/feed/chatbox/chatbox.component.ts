import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ChatService } from 'src/app/services/chat.service';
import { Observable, Subscription ,of} from 'rxjs';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})

export class ChatboxComponent implements OnInit {
  chat_box_tgl:boolean=true;
  chat_box_list_tgl:boolean=true;
  private_chat:boolean=false;
  minimize:boolean=false;
  maximize:boolean=true;
  newMessage: string;
  messageList:  string[] = [];
  document$: Observable<string[]>;
  currentDoc: string;
  dyn_var:string;
  private _docSub: Subscription;
  constructor(private chatService: ChatService) { }
  ngOnInit() {
    this.document$ = this.chatService.documents$;
    this._docSub = this.chatService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
 
  }


  sendMessage() {
    this.chatService.getDocument('12345');
    this.document$.subscribe(res => this.dyn_var=res.toString());
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
