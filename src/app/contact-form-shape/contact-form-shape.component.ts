import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-form-shape',
  templateUrl: './contact-form-shape.component.html',
  styleUrls: ['./contact-form-shape.component.scss'],
})
export class ContactFormShapeComponent implements OnInit {
  // Indicates whether the message has been successfully sent
  success: boolean = false;

  // Holds the values of the form fields
  formData = {
    name: '',
    email: '',
    message: '',
  };

  ngOnInit(): void {
    AOS.init();
  }

  async sendMail() {
    let formDataToSend = new FormData();
    formDataToSend.append('name', this.formData.name);
    formDataToSend.append('email', this.formData.email);
    formDataToSend.append('message', this.formData.message);

    try {
      const response = await fetch(
        'https://mazinfouad.com/send_mail/send_mail.php',
        {
          method: 'POST',
          body: formDataToSend,
        }
      );

      if (response.ok) {
        // Handle success response
        this.success = true;
        // Reset formData or perform other success actions
        this.formData = { name: '', email: '', message: '' };
        // Optionally, display a success message or redirect the user
      } else {
        // Handle non-success response
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error condition, such as by displaying an error message
    }
  }
}
