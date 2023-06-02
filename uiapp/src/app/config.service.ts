import {
  HttpClient
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {
    this.http.get('//api.rnresume.info/sanctum/csrf-cookie').subscribe();
    //this.http.post('//api.dev.rnresume/login', {}).subscribe();
  }

  sendMessage(contactForm: { name: string; email: string; desc: string }) {
    const http = this.http.post('//api.rnresume.info/sendMessage', contactForm);
    return http;
  }
} 
