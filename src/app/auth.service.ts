// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private loggedIn: boolean = false;

//   isLoggedIn(): boolean {
//     return this.loggedIn;
//   }

//   login(): void {
//     this.loggedIn = true;
//   }

//   logout(): void {
//     this.loggedIn = false;
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8083/api/auth'; // Update API base URL if needed
  private tokenKey = 'authToken';
  private userIdKey = 'userId';

  // BehaviorSubject to track authentication state
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Signup method.
   * Sends user data to the backend to create an account.
   * @param user - User signup data
   */
  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user).pipe(
      catchError((error) => {
        console.error('Signup error:', error);
        return throwError(() => new Error(error.error || 'Signup failed.'));
      })
    );
  }

  /**
   * Login method.
   * Sends credentials to the backend and receives a token on success.
   * @param credentials - User login credentials
   */
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(() => new Error(error.error || 'Login failed.'));
      })
    );
  }

  /**
   * Google Login or Signup.
   * Sends Google token to the backend for authentication.
   * @param googleToken - Google authentication token
   */
  googleSignupOrLogin(googleToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/google-auth`, { token: googleToken }).pipe(
      catchError((error) => {
        console.error('Google Auth error:', error);
        return throwError(() => new Error(error.error || 'Google authentication failed.'));
      })
    );
  }

  /**
   * Logout method.
   * Clears the user session and updates the authentication state.
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userIdKey);
    this.isLoggedInSubject.next(false);
  }

  /**
   * Save user token and ID in localStorage.
   * @param token - Authentication token
   * @param userId - User ID
   */
  saveUserSession(token: string, userId: string): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userIdKey, userId);
    this.isLoggedInSubject.next(true);
  }

  /**
   * Retrieve the authentication token.
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Retrieve the logged-in user ID.
   */
  getUserId(): string | null {
    return localStorage.getItem(this.userIdKey);
  }

  /**
   * Check if a token exists in localStorage.
   */
  private hasToken(): boolean {
    return !!this.getToken();
  }

  /**
   * Forgot password method.
   * Sends a reset password request to the backend.
   * @param email - User's email address
   */
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email }).pipe(
      catchError((error) => {
        console.error('Forgot Password error:', error);
        return throwError(() => new Error(error.error || 'Failed to send reset password email.'));
      })
    );
  }
}
