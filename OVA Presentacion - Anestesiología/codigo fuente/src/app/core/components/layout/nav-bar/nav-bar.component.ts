import { Component, Input } from '@angular/core';

@Component({
  selector: 'lo-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  
  @Input() elements : Array<MenuBarElement>;
  constructor() {}

  getElementClass(el : MenuBarElement) {
    return el.isActive && el.isActive() ? 'is-active' : '';
  }

  elementClick(el : MenuBarElement) {
    if (el.onClick) {
      el.onClick()
    }
  }
}

interface MenuBarElement{
  icon ?: string;
  text: string;
  isActive : () => boolean;
  onClick : () => void;
}