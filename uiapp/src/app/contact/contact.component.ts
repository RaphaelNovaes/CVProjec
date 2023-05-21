import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  messageSent = false;
  messageError = false;
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    desc: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private configService: ConfigService) {}

  subContactForm() {
    const http = this.configService.sendMessage(
      <{ name: string; email: string; desc: string }>this.contactForm.value
    );
    http.subscribe({
      complete: () => {
        this.contactForm.reset();
        setTimeout(() => {
          this.messageSent = false;
        }, 5000);
        this.messageSent = true;
      },
      error: (err) => {
        setTimeout(() => {
          this.messageError = false;
        }, 10000);
        this.messageError = true;
      },
    });
  }
}
