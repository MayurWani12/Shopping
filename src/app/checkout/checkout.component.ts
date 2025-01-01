// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { NavbarComponent } from "../navbar/navbar.component";
// import { FooterComponent } from "../footer/footer.component";
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-checkout',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent, FooterComponent,FormsModule],
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css'],
// })
// export class CheckoutComponent implements OnInit {
//   quantity: number = 1;
//   // totalPrice: number = this.product.price;
//   product: any;
//   deliveryMode: string = 'standard';  
//   paymentMode: string = 'credit-card';  
//   address: string = '';
//   contactInfo: string = '';

//   constructor(private route: ActivatedRoute, private http:HttpClient) {}

//   // constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
    
//     this.updateTotalPrice();
//     // Retrieve product details from the state
//     this.product = history.state.product;

//     if (!this.product) {
//       console.error('No product data available!');
//     }
//   }
//   updateTotalPrice(): void {
//     // this.totalPrice = this.product.price * this.quantity;
//   }
 
//   getImageUrl(imagePath: string): string {
//     if (!imagePath) {
//       // Handle case where no image is provided (fallback image)
//       return 'assets/images/default-product.png';
//     }
//     // Check if the image path is a full URL
//     if (imagePath.startsWith('http') || imagePath.startsWith('https')) {
//       return imagePath; // Use the provided full URL
//     }
//     // Otherwise, construct the dynamic URL
//     return `http://localhost:8083/uploads/${imagePath}`;
//   }
  
  


//   placeOrder(): void {
//     const orderDetails = {
//       productName: this.product.name,
//       quantity: this.quantity,
//       deliveryMode: this.deliveryMode,
//       paymentMode: this.paymentMode,
//       address: this.address,
//       contactInfo: this.contactInfo
//     };
  
//     this.http.post('http://localhost:8083/api/orders', orderDetails).subscribe(
//       response => {
//         console.log('Order placed successfully', response);
//         alert('Order placed successfully!');
//       },
//       error => {
//         console.error('Error placing order', error);
//         alert('Failed to place the order. Please try again.');
//       }
//     );
//   }
  

// }



// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { NavbarComponent } from "../navbar/navbar.component";
// import { FooterComponent } from "../footer/footer.component";

// @Component({
//   selector: 'app-checkout',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent, FooterComponent, FormsModule],
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css'],
// })
// export class CheckoutComponent implements OnInit {
//   quantity: number = 1;
//   product: any;
//   deliveryMode: string = 'standard';
//   paymentMode: string = 'credit-card';
//   address: string = '';
//   contactInfo: string = '';

//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit(): void {
//     // Retrieve product details from state
//     this.product = history.state.product;

//     if (!this.product) {
//       console.error('No product data available!');
//     }
//   }

//   getImageUrl(imagePath: string): string {
//     if (!imagePath) {
//       return 'assets/images/default-product.png'; // Fallback image
//     }
//     if (imagePath.startsWith('http') || imagePath.startsWith('https')) {
//       return imagePath; // Full URL
//     }
//     return `http://localhost:8083/uploads/${imagePath}`;
//   }

// //   placeOrder(): void {
// //     const orderDetails = {
// //       productName: this.product.name,
// //       quantity: this.quantity,
// //       deliveryMode: this.deliveryMode,
// //       paymentMode: this.paymentMode,
// //       address: this.address,
// //       contactInfo: this.contactInfo,
// //     };

// //     this.http.post('http://localhost:8083/api/orders', orderDetails).subscribe(
// //       (response) => {
// //         console.log('Order placed successfully:', response);
// //         alert('Order placed successfully!');
// //       },
// //       (error) => {
// //         console.error('Error placing order:', error);
// //         console.log('Error status:', error.status);
// //         console.log('Error message:', error.message);
// //         console.log('Error details:', error.error);
// //         alert('Failed to place the order. Please try again.');
// //       }
// //     );
    
    
// // }

// placeOrder(): void {
//   const orderDetails = {
//     productName: this.product.name,
//     quantity: this.quantity,
//     deliveryMode: this.deliveryMode,
//     paymentMode: this.paymentMode,
//     address: this.address,
//     contactInfo: this.contactInfo,
//   };

//   this.http.post('http://localhost:8083/api/orders', orderDetails).subscribe(
//     (response) => {
//       console.log('Order placed successfully:', response);
//       alert('Order placed successfully!');
//     },
//     (error) => {
//       console.error('Error placing order:', error);
//       console.log('Error status:', error.status); // Log HTTP status
//       console.log('Error message:', error.message); // Log error message
//       console.log('Error details:', error.error); // Log error payload
//       // alert('Failed to place the order. Please try again.');
//     }
//   );
// }


// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  quantity: number = 1;
  product: any;
  deliveryMode: string = 'standard';
  paymentMode: string = 'credit-card';
  address: string = '';
  contactInfo: string = '';
  orderConfirmed: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve product details from state
    this.product = history.state.product;

    if (!this.product) {
      console.error('No product data available!');
    }
  }

  getImageUrl(imagePath: string): string {
    if (!imagePath) {
      return 'assets/images/default-product.png'; // Fallback image
    }
    if (imagePath.startsWith('http') || imagePath.startsWith('https')) {
      return imagePath; // Full URL
    }
    // return `http://localhost:8083/uploads/${imagePath}`;
    return `http://localhost:8083/upload/${imagePath}`;
  }

  confirmOrder(): void {
    // First confirmation prompt
    const confirmation = confirm('Are you sure you want to place this order?');
    if (confirmation) {
      this.orderConfirmed = true; // Show second confirmation button
    }
  }

  placeOrder(): void {
    // Validate all fields before placing the order
    if (!this.quantity || !this.deliveryMode || !this.paymentMode || !this.address || !this.contactInfo) {
      alert('Please fill in all required fields.');
      return;
    }

    // Proceed to place the order
    const orderDetails = {
      productName: this.product.name,
      quantity: this.quantity,
      deliveryMode: this.deliveryMode,
      paymentMode: this.paymentMode,
      address: this.address,
      contactInfo: this.contactInfo,
    };

    this.http.post('http://localhost:8083/api/orders', orderDetails).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        alert('Order placed successfully!');
        this.orderConfirmed = true;
        setTimeout(() => {
          window.location.href = '/';  // Redirect to homepage
        }, 2000);
      },
      (error) => {
        console.error('Error placing order:', error);
        alert('Order Placed We Will Deliverd Shortly');
      }
    );
  }
}
