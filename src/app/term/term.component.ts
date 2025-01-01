import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-term',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './term.component.html',
  styleUrl: './term.component.css'
})
export class TermComponent {

}
