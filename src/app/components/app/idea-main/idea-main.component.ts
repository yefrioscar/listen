import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'idea-main',
  templateUrl: './idea-main.component.html'
})
export class IdeaMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}


  
  
  

