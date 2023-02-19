import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss'],
})
export class ProjectBoxComponent implements OnInit {
  @Input() project: any;
  @Input() loopIndex: number;

  ngOnInit() {
    AOS.init();
  }
}
