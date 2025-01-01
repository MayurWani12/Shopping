import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form Submitted:', this.formData);
      alert('Thank you for your message!');
      this.formData = { name: '', email: '', message: '' }; 
    } else {
      alert('Please fill out all fields.');
    }
  }
}