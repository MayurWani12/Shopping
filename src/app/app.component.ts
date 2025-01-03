import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ViewportScroller } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
ngOnInit(): void {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
     
      this.viewportScroller.scrollToPosition([0, 0]);
    }
  });
}


}


