import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8083/api/users';

  private usernameSubject = new BehaviorSubject<string | null>(null);
  currentUsername = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    console.log('Sending signup request:', user); // Debugging request
    return this.http.post(`${this.apiUrl}/signup`, user, { responseType: 'text' }).pipe(
      catchError((error) => {
        console.error('Error during signup:', error); // Log backend error
        const errorMsg = error.error || 'Signup failed.'; // Handle string errors
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      catchError((error) => {
        console.error('Error during login:', error); // Log backend error
        const errorMsg = error.error || 'Login failed.';
        return throwError(() => new Error(errorMsg));
      })
    );
  }
  
// 




// 


  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }



  googleLogin(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/google-login`, { token }).pipe(
      catchError((error) => {
        console.error('Google login error:', error);
        return throwError(() => new Error(error.error || 'Google login failed.'));
      })
    );
  }
  googleSignupOrLogin(token: string): Observable<any> {
    // Send the Google token to your backend for verification and login/signup
    return this.http.post(`${this.apiUrl}/google-signup-login`, { token });
  }
  forgotPassword(email: string) {
    return this.http.post('http://localhost:8083/api/users/forgot-password', { email });
  }
  
  
}
