import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ConfigService } from '../config.service';
import { catchError, tap, throwError } from 'rxjs';

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
    //Send the form data to the observable to be send to the server API
    const http = this.configService.sendMessage(
      <{ name: string; email: string; desc: string }>this.contactForm.value
    );
    //Using pipe to handle error
    http
      .pipe(
        tap((data) => console.log('tap ' + data)),
        catchError(function (error) {
          if (error.status === 0) {
            console.error('An error occurred:', error.error);
          } else {
            console.error(
              `Backend returned code ${error.status}, body was: `,
              error.error
            );
          }
          return throwError(
            () => new Error('Something bad happened; please try again later.')
          );
        })
      )
      //Subscribe and set an observer callback to handle the final alert message
      .subscribe({
        next: (nxt): void => {
          console.log('Observer got a next value: ' + nxt);
        },
        error: (err): void => {
          setTimeout(() => {
            this.messageError = false;
            console.log(err);
          }, 10000);
          this.messageError = true;
        },
        complete: (): void => {
          this.contactForm.reset();
          setTimeout(() => {
            this.messageSent = false;
          }, 5000);
          this.messageSent = true;
        },
      });
  }
}
