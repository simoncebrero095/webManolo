import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// --------------------------------------------------------------traducion a DOM en typescript 
//   addEventListener('DOMContentLoad', () => {
//       const btn_menu = document.querySelector('.btn_menu')
//       if (btn_menu){
//           btn_menu.addEventListener('click', () => {
//             const menu_items = document.querySelector('.menu_items')
//             menu_items.classList.toggle('show')
//           })
//       }
// })
}
