


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8083/api/auth'; 
  private tokenKey = 'authToken';
  private userIdKey = 'userId';

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  
  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user).pipe(
      catchError((error) => {
        console.error('Signup error:', error);
        return throwError(() => new Error(error.error || 'Signup failed.'));
      })
    );
  }

  
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(() => new Error(error.error || 'Login failed.'));
      })
    );
  }


  googleSignupOrLogin(googleToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/google-auth`, { token: googleToken }).pipe(
      catchError((error) => {
        console.error('Google Auth error:', error);
        return throwError(() => new Error(error.error || 'Google authentication failed.'));
      })
    );
  }


  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userIdKey);
    this.isLoggedInSubject.next(false);
  }


  saveUserSession(token: string, userId: string): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userIdKey, userId);
    this.isLoggedInSubject.next(true);
  }

 
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

 
  getUserId(): string | null {
    return localStorage.getItem(this.userIdKey);
  }

  private hasToken(): boolean {
    return !!this.getToken();
  }

  
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email }).pipe(
      catchError((error) => {
        console.error('Forgot Password error:', error);
        return throwError(() => new Error(error.error || 'Failed to send reset password email.'));
      })
    );
  }
}
