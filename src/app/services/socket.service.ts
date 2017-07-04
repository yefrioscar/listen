import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Idea } from '../models/idea.model';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private BASE_URL = 'http://localhost:8080';
  private socket;

  constructor() { }

  connectSocket(){
  		this.socket = io(this.BASE_URL, { 'forceNew':true });
  	}

    sendMessage(idea:Idea):void{
		  this.socket.emit('add-message', idea);
	  }


  receiveMessages():any{ 
		let observable = new Observable(observer => {
			this.socket.on('add-message-response', (data) => {
				observer.next(data); 
        console.log(data);
			});
 
			return () => {
				this.socket.disconnect();
			}; 
		}); 
		return observable;
	}

}
