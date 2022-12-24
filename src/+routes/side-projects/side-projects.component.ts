import { Component, OnInit } from '@angular/core';

class ProjectDetails {
  title: string;
  image: string;
  description: string;
  demoUrl: string;
  sourceUrl: string;
}

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss']
})
export class SideProjectsComponent implements OnInit {


  projects: ProjectDetails[] = [
    {
      title: "Coin UI",
      image: "/assets/projects/coin-ui.png",
      description: "A UI for viewing data from coincap.io.",
      demoUrl: "https://haydenjogs92.github.io/coin-ui/",
      sourceUrl: "https://github.com/haydenJogs92/coin-ui"
    },
    {
      title: "React Weather App",
      image: "/assets/projects/react-weather-app.png",
      description: "A UI for viewing weather details for a location or coordinates.",
      demoUrl: "https://haydenjogs92.github.io/reactWeatherApp/",
      sourceUrl: "https://github.com/haydenJogs92/reactWeatherApp"
    }
    // ,
    // {
    //   title: "Basic Angular App",
    //   image: "/assets/projects/basic-angular-app.png",
    //   description: "A basic angular app with authentication and a fake backend.",
    //   demoUrl: "https://github.com/haydenJogs92/basic-angular-app",
    //   sourceUrl: " https://haydenjogs92.github.io/basic-angular-app/"
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
