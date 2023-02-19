import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-form-shape',
  templateUrl: './contact-form-shape.component.html',
  styleUrls: ['./contact-form-shape.component.scss'],
})
export class ContactFormShapeComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
