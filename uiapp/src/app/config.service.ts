import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { 
    this.http.get('/api/sanctum/csrf-cookie').subscribe();
  }

  sendMessage(contactForm:{name: string, email: string, desc:string}){
    const http = this.http.post('/api/sendMessage', contactForm, {withCredentials:true});
    return http;
  }
}