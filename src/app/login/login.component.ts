


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginModel = { email: '', password: '' };
  errorMessage: string | null = null;
  private clientId = '483257834303-f1jj6na7ak0ag64ppjsquumav8ldm6bh.apps.googleusercontent.com'; // Replace with your Google client ID

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadGoogleAPI();
  }

  private loadGoogleAPI(): void {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.onload = () => this.initializeGoogleSignIn();
    document.body.appendChild(script);
  }

  private initializeGoogleSignIn(): void {
    gapi.load('auth2', () => {
      const auth2 = gapi.auth2.init({
        client_id: this.clientId,
        scope: 'profile email',
      });
      this.attachSignInHandler(auth2);
    });
  }

  private attachSignInHandler(auth2: any): void {
    const button = document.getElementById('googleSignInButton');
    if (button) {
      auth2.attachClickHandler(
        button,
        {},
        (googleUser: any) => this.handleGoogleSignIn(googleUser),
        (error: any) => {
          console.error('Google Sign-In error:', error);
          this.errorMessage = 'Google Sign-In failed. Please try again.';
        }
      );
    }
  }

  private handleGoogleSignIn(googleUser: any): void {
    const token = googleUser.getAuthResponse().id_token;
    this.userService.googleSignupOrLogin(token).subscribe({
      next: (response: any) => {
        console.log('Google login/signup successful:', response);
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Google login/signup failed:', err);
        this.errorMessage = 'Google login/signup failed. Please try again.';
      },
    });
  }



  onLoginSubmit(): void {

    if (this.loginModel.email) {
      this.loginModel.email = this.loginModel.email.toLowerCase();
    }
  
    if (!this.loginModel.email || !this.loginModel.password) {
      this.errorMessage = 'Email and password are required';
      return;
    }
  
    this.userService.login(this.loginModel).subscribe({
      next: (user) => {
        // Handle successful login
        if (user && user.name) {
          this.userService.setUsername(user.name);
          sessionStorage.setItem('username', user.name);
        }
        if (user.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/google']);
        }
      },
      error: (err) => {
      
        this.errorMessage = err.error || 'Login failed. Please try again.';
      },
    });
  }

onGoogleLogin(): void {
      console.log('Google Login button clicked');
    }
}