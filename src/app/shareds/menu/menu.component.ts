import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    addEventListener('DOMContentLoaded', ()=>{
      const btn_menu = document.querySelector('.btn-menu')
      if(btn_menu){
          btn_menu.addEventListener('click', ()=>{
              const menu_items = document.querySelector('.menu-items')
              menu_items.classList.toggle('show')
          })
      }
  })
  }

}
