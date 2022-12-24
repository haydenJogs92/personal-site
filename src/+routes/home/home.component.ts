import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  gitHubUrl: String = 'https://github.com/haydenJogs92';
  linkedInUrl: String = 'https://www.linkedin.com/in/hayden-brown-7366aab4/';

  constructor() { }

  ngOnInit(): void {}
}
