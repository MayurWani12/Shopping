// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { CartService } from '../cart.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from "../navbar/navbar.component";
// import { FooterComponent } from "../footer/footer.component";
// import { Router } from '@angular/router';
// import { ProdService } from '../prod.service';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule, FormsModule, NavbarComponent, FooterComponent],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent {
//   products: any[] = [];
//   cartItems: any[] = [];
//   totalPrice: number = 0;

//   constructor(private http: HttpClient, private cartService: CartService,private router:Router,private productService:ProdService) {}

//   ngOnInit(): void {
//     this.getCartItems();
   

//   }

//   getImageUrl(imagePath: string): string {
//     // Check if the image path is already a full URL (starts with 'http')
//     if (imagePath.startsWith('http')) {
//       return imagePath; // Static image URL
//     }
//     // Otherwise, construct the dynamic URL
//     return `http://localhost:8083/uploads/${imagePath}`;
//   }
  

//   getCartItems(): void {
//     this.cartService.getCartItems().subscribe(
//       (response: any[]) => {
//         this.cartItems = response;
//         this.calculateTotalPrice();
//       },
//       (error) => {
//         console.error('Error fetching cart items:', error);
//       }
//     );
//   }

//   updateCartItem(item: any): void {
//     this.cartService.updateCartItem(item).subscribe(
//       (response) => {
//         console.log('Cart item updated successfully');
//         this.calculateTotalPrice();
//       },
//       (error) => {
//         console.error('Error updating cart item:', error);
//       }
//     );
//   }

//   removeItem(itemId: number): void {
//     this.cartService.removeCartItem(itemId).subscribe(
//       (response) => {
//         console.log('Item removed from cart');
//         this.getCartItems(); // Refresh cart
//       },
//       (error) => {
//         console.error('Error removing cart item:', error);
//       }
//     );
//   }

//   calculateTotalPrice(): void {
//     this.totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//   }

//   buyNow(item: any): void {
   
//     alert(`now process start the buy ${item.productName}................`);
//     this.router.navigate(['/checkout', item.id]);
//   }
  
//   viewProduct(item: any): void {
//     this.router.navigate(['/product', item.id]); 
//   }

// }



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
  userId: number = 1; // Replace with actual user ID logic

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
        // Check if the image path is already a full URL (starts with 'http')
        if (imagePath.startsWith('http')) {
          return imagePath; // Static image URL
        }
        // Otherwise, construct the dynamic URL
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


  // buyNow(): void {
  //   this.router.navigate(['/checkout'], { state: { product: this.product } });
  // }

  viewProduct(item: any): void {
    this.router.navigate(['/product', item.productId]);
  }
}
