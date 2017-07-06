import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Idea } from '../models/idea.model';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private BASE_URL = 'http://174.138.49.237:3000';
  private socket;


  constructor() { }

  connectSocket(){
  		this.socket = io(this.BASE_URL, { 'forceNew': true });
  	}

    sendMessage(idea: string): void {
		  this.socket.emit('add-message', idea);
	  }

	sendTitle(title: string): void {
		  this.socket.emit('send-title', title);
	}

	sendMessage1(idea: string): void {
		  this.socket.emit('add-message1', idea);
	  }

	sendMessage2(idea: string): void {
		  this.socket.emit('add-message2', idea);
	  }

	sendMessage3(idea: string): void {
		  this.socket.emit('add-message3', idea);
	  }





	receiveTitle(): any {
		const observable = new Observable(observer => {
			this.socket.on('title', (data) => {
				observer.next(data);
			});
			
		});
		return observable;
	}

  receiveMessages(): any {
		const observable = new Observable(observer => {
			this.socket.on('response', (data) => {
				observer.next(data);
			});
			
		});
		return observable;
	}

	receiveMessages1(): any {
		const observable = new Observable(observer => {
			this.socket.on('response1', (data) => {
				observer.next(data);
			});
			
		});
		return observable;
	}

	receiveMessages2(): any {
		const observable = new Observable(observer => {
			this.socket.on('response2', (data) => {
				observer.next(data);
			});
			
		});
		return observable;
	}

	receiveMessages3(): any {
		const observable = new Observable(observer => {
			this.socket.on('response3', (data) => {
				observer.next(data);
			});
			
		});
		return observable;
	}

	receiveConnections(): any {
		const observable = new Observable(observer => {
			this.socket.on('connectUsers', (data) => {
				observer.next(data);
			});

			return () => {
				this.socket.disconnect();
			};
		});
		return observable;
	}

}


