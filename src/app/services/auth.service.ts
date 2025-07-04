import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  signIn(credentials: { username: string; password: string }) {
    return this.apiService.post('auth/login', credentials);
  }

  signUp(credentials: { username: string; password: string }) {
    return this.apiService.post('/sign-up', credentials);
  }

  logout() {
    return this.apiService.post('auth/logout', {});
  }

  isAuthenticated() {
    return this.apiService.get('auth/info');
  }
}
