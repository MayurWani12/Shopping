

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;
  userId: number = 1; 

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartService.getCartItems(this.userId).subscribe(
      (response: any[]) => {
        this.cartItems = response;
        this.calculateTotalPrice();
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  getImageUrl(imagePath: string): string {
      
        if (imagePath.startsWith('http')) {
          return imagePath; 
        }
     
        return `http://localhost:8083/uploads/${imagePath}`;
      }
      

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateCartItem(item: any): void {
    this.cartService.updateCartItem(item).subscribe(
      () => {
        console.log('Cart item updated successfully');
        this.calculateTotalPrice();
      },
      (error) => {
        console.error('Error updating cart item:', error);
      }
    );
  }

  removeItem(itemId: number): void {
    this.cartService.removeCartItem(itemId).subscribe(
      () => {
        console.log('Item removed from cart');
        this.getCartItems(); 
      },
      (error) => {
        console.error('Error removing cart item:', error);
      }
    );
  }

  buyNow(item: any): void {
    alert(`Processing purchase for ${item.productName}`);
    this.router.navigate(['/checkout', item.id]);
  }




  viewProduct(item: any): void {
    this.router.navigate(['/product', item.productId]);
  }
}
