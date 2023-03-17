import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [
    {
      image: 'https://i.postimg.cc/vZwvgGXY/mini-aliendefense.png',
      link: 'https://danielmontes-aliendefense.netlify.app/',
      title: 'Alien Defense',
      description: 'Mi primer videojuego que he diseñado y programado con Phaser.',
      year: '2018'
    },
    {
      image: 'https://i.postimg.cc/2y7YFcQV/preview-card.png',
      link: 'https://danielmontes9.github.io/StatsPreviewCardComponent/',
      title: 'Card Component',
      description: '"Card Component" con diseño responsivo, reto de FrontendMentor.',
      year: '2019'
    },
    {
      image: 'https://i.postimg.cc/ZKYPP9Zq/preview-apprendiendo.png',
      link: 'https://danydeveloper9.github.io/apprendiendo/index.html',
      title: 'APPRENDIENDO',
      description: 'App educativa con ejercicios, para mejorar tu gramática.',
      year: '2020'
    },
    {
      image: 'https://i.postimg.cc/1z5W7WDL/preview-cipemx.png',
      link: 'https://cipe.mx/',
      title: 'CIPE.MX',
      description: 'Landing Page responsiva para CIPE, empresa enfocada en consultoría.',
      year: '2021'
    },
    {
      image: 'https://i.postimg.cc/zfr1MkV5/mini-mapas.png',
      link: 'https://maxal-cloud.com.mx/MapaZac/index.html',
      title: 'Dashboard Dinámico',
      description: 'Panel de información con datos estadísticos y gráficos de Zacatecas.',
      year: '2022'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
