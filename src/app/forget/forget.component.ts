import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResetComponent } from "../reset/reset.component";

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ResetComponent,HttpClientModule],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  email: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log('Submitting email:', this.email);
    this.http.post('http://localhost:8083/api/users/forgot-password', { email: this.email })
      .subscribe({
        next: (response) => {
          console.log('Response:', response);
          alert('Reset link sent to your email!');
          this.router.navigate(['/reset'], { queryParams: { email: this.email } });
        },
        error: (error) => {
          console.error('Error Details:', error);
          if (error.status === 400) {
            alert(`Error: ${error.error || 'Invalid email or request format'}`);
          } else if (error.status === 500) {
            alert('Internal server error. Please try again later.');
          } else {
            // alert('Error sending reset link.');
          }
        }
      });
  }
}  