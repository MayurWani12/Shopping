import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { OrdersService } from '../order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userorder',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './userorder.component.html',
  styleUrl: './userorder.component.css'
})
export class UserorderComponent implements OnInit {
  orders: any[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log('Orders fetched successfully:', this.orders);
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
}