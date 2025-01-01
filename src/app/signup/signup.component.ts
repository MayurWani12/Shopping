import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

declare const gapi: any;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SigupComponent implements OnInit {
  signupModel = { name: '', email: '', password: '' };
  errorMessage: string = '';
  clientId: string = '483257834303-f1jj6na7ak0ag64ppjsquumav8ldm6bh.apps.googleusercontent.com'; 

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadGoogleAPI();
  }

  
  loadGoogleAPI(): void {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.onload = () => this.initializeGoogleSignIn();
    document.body.appendChild(script);
  }

 
  initializeGoogleSignIn(): void {
    gapi.load('auth2', () => {
      const auth2 = gapi.auth2.getAuthInstance() || gapi.auth2.init({
        client_id: this.clientId,
        scope: 'profile email',
      });
      this.attachSignInHandler(auth2);
    });
  }

  
  attachSignInHandler(auth2: any): void {
    auth2.attachClickHandler(
      document.getElementById('googleSignInButton'),
      {},
      (googleUser: any) => this.handleGoogleSignIn(googleUser),
      (error: any) => {
        console.error('Google Sign-In error:', error);
        // this.errorMessage = 'Google Sign-In failed. Please try again.';
      }
    );
  }

  
  handleGoogleSignIn(googleUser: any): void {
    const token = googleUser.getAuthResponse().id_token;
    this.userService.googleSignupOrLogin(token).subscribe({
      next: (response: any) => {
        console.log('Google login/signup successful:', response);
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Google login/signup failed:', err);
        this.errorMessage = 'Google login/signup failed. Please try again.';
      }
    });
  }


  gmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email && !email.endsWith('@gmail.com')) {
      return { 'gmailDomain': 'Only Gmail email addresses are allowed' };
    }
    return null;
  }

  onEmailInput(emailField: any): void {
    this.signupModel.email = this.signupModel.email.toLowerCase();
  }

  
  isLowercase(email: string): boolean {
    return email === email.toLowerCase();
  }

  onSignupSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.signup(this.signupModel).subscribe({
        next: (response) => {
          console.log('Signup success:', response);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Signup failed:', err);
          this.errorMessage = err.message || 'Signup failed';
        },
      });
    }
  }
}
