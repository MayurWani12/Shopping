import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit {
  token: string = '';
  newPassword: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  onSubmit() {
    if (this.newPassword.trim() === '') {
      alert('Password cannot be empty');
      return;
    }

    this.http.post('http://localhost:8083/api/users/reset-password', {
      token: this.token,
      password: this.newPassword
    }).subscribe({
      next: () => {
        alert('Password reset successfully. Please log in.');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error:', error);
        alert(error.error || 'Failed to reset password. Try again.');
      }
    });
  }
}