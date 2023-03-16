import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsN: any[] = [1,2,3,4,5]
  projects: any[] = [
    {
      image: 'https://i.postimg.cc/2y7YFcQV/preview-card.png',
      link: 'https://danielmontes9.github.io/StatsPreviewCardComponent/',
      title: 'Card Component',
      description: 'xdxdxd',
      year: '2018'
    },
    {
      image: 'https://i.postimg.cc/vZwvgGXY/mini-aliendefense.png',
      // https://aliendefense.netlify.app/
      link: 'https://danielmontes9.github.io/alien-defense/',
      title: 'Alien Defense',
      description: 'xdxdxd',
      year: '2019'
    },
    {
      image: 'https://i.postimg.cc/ZKYPP9Zq/preview-apprendiendo.png',
      link: 'https://danydeveloper9.github.io/apprendiendo/index.html',
      title: 'APPRENDIENDO',
      description: 'xdxdxd',
      year: '2020'
    },
    {
      image: 'https://i.postimg.cc/1z5W7WDL/preview-cipemx.png',
      link: 'https://cipe.mx/',
      title: 'CIPE.MX',
      description: 'xdxdxd',
      year: '2021'
    },
    {
      image: 'https://i.postimg.cc/zfr1MkV5/mini-mapas.png',
      link: 'https://maxal-cloud.com.mx/MapaZac/index.html',
      title: 'Dashboard Dinámico',
      description: 'xdxdxd',
      year: '2022'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
