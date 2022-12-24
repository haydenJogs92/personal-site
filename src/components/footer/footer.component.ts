import { Component, OnInit } from '@angular/core';
import { navLinks, NavLink } from '../../lib/consts';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: Number;
  navLinks: NavLink[] = navLinks;
  
  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getUTCFullYear();
  }

}
