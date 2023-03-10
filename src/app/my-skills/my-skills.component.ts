import { Component, ElementRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent {
  mySkills: Array<any> = [
    {
      img: 'Angular.png',
      title: 'Angular',
    },
    {
      img: 'Typescript.png',
      title: 'Typscript',
    },
    {
      img: 'Javascript.png',
      title: 'JavaScript',
    },
    {
      img: 'html.png',
      title: 'HTML',
    },
    {
      img: 'Firebase.png',
      title: 'Firebase',
    },
    {
      img: 'Git.png',
      title: 'GIT',
    },
    {
      img: 'Css.png',
      title: 'CSS',
    },
    {
      img: 'API.png',
      title: 'Rest-Api',
    },
    {
      img: 'Scrum.png',
      title: 'Scrum',
    },
    {
      img: 'material-design.png',
      title: 'Material Design',
    },
  ];

  audioPlayer: HTMLAudioElement;

  constructor() {
    this.audioPlayer = new Audio('/assets/audio/hover-effect.mp3');
    this.audioPlayer.onended = () => {
      this.audioPlayer.remove();
    };

    AOS.init();
  }

  playSound() {
    this.audioPlayer.currentTime = 0;
    this.audioPlayer.play();
  }
}
