import { Component, OnInit } from '@angular/core';
import { navLinks, NavLink } from '../../lib/consts';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  navLinks: NavLink[] = navLinks;
  constructor() { }

  ngOnInit(): void {
  }

}
