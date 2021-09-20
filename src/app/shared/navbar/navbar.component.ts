import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
      private renderer:Renderer2,
      private elmRef: ElementRef 
      ) { }

  ngOnInit() {
    this.renderer.setAttribute(this.elmRef.nativeElement, 'btn_menu', 'true');
    const menu_items = document.querySelector('.menu_items')
    menu_items.classList.toggle('show')
  }
}
