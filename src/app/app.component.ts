import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hayden Brown';
  year = new Date().getFullYear();
  hideNavigation: boolean;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild
        }
        return route;
      }),
      filter((route: ActivatedRoute) => route.outlet === 'primary')
    ).subscribe(route => {
      this.hideNavigation = route.snapshot.data['hideNavigation'];
    });

  }

}
