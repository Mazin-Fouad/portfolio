import { Component, ElementRef, OnInit } from '@angular/core';

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
      title: 'Ring Of Fire',
      code: 'Angular | Typescript | HTML | Scss | Firebase',
      description:
        'A popular drinking game, you have to choose a card from the card stack and implement what appears to you in the text.',
      img: 'assets/imgs/project-box-imgs/ring-of-fire.png',
      link: '#',
      gitHub: 'https://github.com/Mazin-Fouad/el_pollo_loco',
    },
  ];
}
