import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document,Room_number } from '../service_models/auth.model';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }
  room_number = this.socket.fromEvent<Room_number>('room_number');
  rc_ack$ = this.socket.fromEvent<string[]>('rc_ack');
  s_u$ = this.socket.fromEvent<string[]>('s_u');
  receive_typing$ = this.socket.fromEvent<boolean>('receive_typing');
  createnewRoom()
  {
    this.socket.emit('joined', 'please_create_a_new_room');
  }
  send_message(message:string)
  {
    this.socket.emit('u_s', message);
  }
  send_typing(is_typing:boolean)
  {
    this.socket.emit('send_typing',is_typing);
  }



}
