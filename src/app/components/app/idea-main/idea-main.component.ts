import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'idea-main',
  templateUrl: './idea-main.component.html'
})
export class IdeaMainComponent implements OnInit {

  exposicion:string;
  constructor(private socket: SocketService ) { }

  ngOnInit() {
    this.socket.connectSocket();

    this.socket.receiveConnections().subscribe(response => {
      console.log(`Hay ${response.numbers} conexiones activas`);
      alert(`Hay ${response.numbers} conexiones activas`);
    });

    
  }

  

  
  onClick(event){

  let tabs = Array.prototype.slice.apply(document.querySelectorAll('.tabs-item'));
  let panels = Array.prototype.slice.apply(document.querySelectorAll('.panels-item'));

  document.getElementById('tabs').addEventListener('click', e => {
    if(event.target.classList.contains('tabs-item')){
      let i = tabs.indexOf(event.target);
      tabs.map(tab => tab.classList.remove('active'));
      tabs[i].classList.add('active');
      panels.map(panel => panel.classList.remove('active'));
      panels[i].classList.add('active');
    }
  });

}


  onKey(){
    


    this.socket.sendMessage(this.exposicion);

    this.socket.receiveMessages().subscribe(response => {
      this.exposicion = response;
      console.log(response);
    });
  }

}
