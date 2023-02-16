import { Component } from '@angular/core';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss'],
})
export class MyPortfolioComponent {
  myProjects: Array<any> = [
    {
      title: 'Join',
      code: 'HTML | CSS | JavaScript',
      description:
        'Task Manager inspired by the Kanban System create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'assets/imgs/project-box-imgs/join.png',
      link: '#',
      gitHub: 'https://github.com/Mazin-Fouad/Join',
    },
    {
      title: 'El Pollo Loco',
      code: 'HTML | CSS | JavaScript',
      description:
        ' Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: 'assets/imgs/project-box-imgs/Pollo-loco .png',
      link: '#',
      gitHub: 'https://github.com/Mazin-Fouad/el_pollo_loco',
    },

    {
      title: 'El Pollo Loco',
      code: 'HTML | CSS | JavaScript',
      description:
        ' Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: 'assets/imgs/project-box-imgs/Pollo-loco .png',
      link: '#',
      gitHub: 'https://github.com/Mazin-Fouad/el_pollo_loco',
    },

    {
      title: 'El Pollo Loco',
      code: 'HTML | CSS | JavaScript',
      description:
        ' Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: 'assets/imgs/project-box-imgs/Pollo-loco .png',
      link: '#',
      gitHub: 'https://github.com/Mazin-Fouad/el_pollo_loco',
    },
  ];
}
