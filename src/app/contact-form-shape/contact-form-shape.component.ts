import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-form-shape',
  templateUrl: './contact-form-shape.component.html',
  styleUrls: ['./contact-form-shape.component.scss'],
})
export class ContactFormShapeComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  success: boolean = false;

  ngOnInit() {
    AOS.init();
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    mailField.disabled = true;
    sendButton.disabled = true;

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('mail', mailField.value);
    formData.append('message', messageField.value);

    await fetch('https://mazinfouad.com/send_mail/send_mail.php', {
      method: 'POST',
      body: formData,
    });

    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
    this.success = true;

    setTimeout(() => {
      this.success = false;
    }, 4000);
  }
}
