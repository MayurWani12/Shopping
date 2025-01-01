// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProdService } from '../prod.service';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from "../navbar/navbar.component";
// import { FooterComponent } from "../footer/footer.component";
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-prodetails',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent, FooterComponent],
//   templateUrl: './prodetails.component.html',
//   styleUrl: './prodetails.component.css'
// })
// export class ProdetailsComponent  implements OnInit {
//   product: any;

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProdService,

//     private router:Router,
//     private http:HttpClient
//   ) {}

//   ngOnInit(): void {
//     const productName = this.route.snapshot.paramMap.get('name');
//     this.productService.products$.subscribe((products) => {
//       this.product = products.find((p: any) => p.name === productName);
//     });
//   }


//   addToCart(): void {
//     const cartItem = {
//       productId: this.product.id,
//       productName: this.product.name,
//       productImage: this.product.image,
//       price: this.product.price,
//       quantity: 1 
//     };
  
//     this.http.post('http://localhost:8083/api/cart', cartItem).subscribe(
//       (response) => {
//         alert('Product added to cart!');
//       },
//       (error) => {
//         console.error('Error adding product to cart:', error);
//         alert('Failed to add product to cart.');
//       }
//     );
//   }

//   buyNow(): void {
//     this.router.navigate(['/checkout'], { state: { product: this.product } });
//   }

// }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdService } from '../prod.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prodetails',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  product: any; // Holds product details

  constructor(
    private route: ActivatedRoute, // To get route parameters
    private productService: ProdService, // To fetch product details
    private router: Router, // For navigation
    private http: HttpClient // For HTTP requests
  ) {}

  ngOnInit(): void {
    // Get the product name from the route parameters
    const productName = this.route.snapshot.paramMap.get('name');

    // Subscribe to the product data stream and find the product by name
    this.productService.products$.subscribe((products) => {
      this.product = products.find((p: any) => p.name === productName);
      if (!this.product) {
        alert('Product not found!');
        this.router.navigate(['/']); // Redirect to the home page if product not found
      }
    });
  }

  addToCart(): void {
    const cartItem = {
      productId: this.product.id,
      productName: this.product.name,
      productImage: this.product.image,
      price: this.product.price,
      quantity: 1 
    };
  
    const userId = 1; // Replace with actual logged-in user ID
  
    this.http.post(`http://localhost:8083/api/cart/add/${userId}`, cartItem).subscribe(
      (response) => {
        console.log('Response from backend:', response);
        alert('Product added to cart!');
      },
      (error) => {
        console.error('Error adding product to cart:', error);
        alert('Failed to add product to cart.');
      }
    );
  }
  
  buyNow(): void {
        this.router.navigate(['/checkout'], { state: { product: this.product } });
      }
}








// // // import { Component, OnInit } from '@angular/core';
// // // import { ActivatedRoute, Router } from '@angular/router';
// // // import { ProdService } from '../prod.service';
// // // import { CommonModule } from '@angular/common';
// // // import { NavbarComponent } from "../navbar/navbar.component";
// // // import { FooterComponent } from "../footer/footer.component";
// // // import { HttpClient } from '@angular/common/http';

// // // @Component({
// // //   selector: 'app-prodetails',
// // //   standalone: true,
// // //   imports: [CommonModule, NavbarComponent, FooterComponent],
// // //   templateUrl: './prodetails.component.html',
// // //   styleUrls: ['./prodetails.component.css']
// // // })
// // // export class ProdetailsComponent implements OnInit {
// // //   product: any;

// // //   constructor(
// // //     private route: ActivatedRoute,
// // //     private productService: ProdService,
// // //     private http: HttpClient
// // //   ) {}

// // //   ngOnInit(): void {
// // //     const productName = this.route.snapshot.paramMap.get('name');
// // //     this.productService.products$.subscribe((products) => {
// // //       this.product = products.find((p: any) => p.name === productName);
// // //     });
// // //   }

// // //   addToCart(): void {
// // //     const cartItem = {
// // //       productId: this.product.id,
// // //       productName: this.product.name,
// // //       productImage: this.product.image,
// // //       price: this.product.price,
// // //       quantity: 1,  // Default quantity
// // //     };

// // //     const userId = 1; // Replace with the actual logged-in user ID

// // //     this.http.post(`http://localhost:8083/api/car/${userId}`, cartItem).subscribe(
// // //       (response) => {
// // //         alert('Product added to cart!');
// // //       },
// // //       (error) => {
// // //         console.error('Error adding product to cart:', error);
// // //         alert('Failed to add product to cart.');
// // //       }
// // //     );
// // //   }
// // //   buyNow(){

// // //   }
// // // }



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProdService } from '../prod.service';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from "../navbar/navbar.component";
// import { FooterComponent } from "../footer/footer.component";
// import { HttpClient } from '@angular/common/http';
// import { UserService } from '../user.service'; // Import UserService

// @Component({
//   selector: 'app-prodetails',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent, FooterComponent],
//   templateUrl: './prodetails.component.html',
//   styleUrls: ['./prodetails.component.css']
// })
// export class ProdetailsComponent implements OnInit {
//   product: any;
//   userId: string | null = null;  // Track the logged-in user's ID

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProdService,
//     private router: Router,
//     private http: HttpClient,
//     private userService: UserService // Inject UserService
//   ) {}

//   ngOnInit(): void {
//     // Fetch product details based on the name from the route
//     const productName = this.route.snapshot.paramMap.get('name');
//     this.productService.products$.subscribe((products) => {
//       this.product = products.find((p: any) => p.name === productName);
//     });

//     // Get the current logged-in user ID from the UserService
//     this.userService.currentUsername.subscribe((username) => {
//       this.userId = username ? 'SomeUserId' : null; // Example: Use username or any other user ID logic
//     });
//   }

//   // addToCart(): void {
//   //   if (!this.userId) {
//   //     alert('You must be logged in to add items to the cart.');
//   //     return;
//   //   }
  
//   //   const cartItem = {
//   //     productId: this.product.id,
//   //     productName: this.product.name,
//   //     price: this.product.price,
//   //     userId: this.userId // Assuming you have the userId available after login
//   //   };
  
//   //   this.http.post('http://localhost:8083/api/shopping-cart/add', cartItem).subscribe(
//   //     (response) => {
//   //       alert('Product added to cart!');
//   //     },
//   //     (error) => {
//   //       console.error('Error adding product to cart:', error);
//   //       if (error.status === 400) {
//   //         alert('Invalid user or missing user ID.');
//   //       } else if (error.status === 404) {
//   //         alert('User not found.');
//   //       } else {
//   //         alert('Failed to add product to cart.');
//   //       }
//   //     }
//   //   );
//   // }
  

//   addToCart(): void {
//     // Ensure the user is logged in and has a valid userId
//     if (!this.userId) {
//       alert('You must be logged in to add items to the cart.');
//       return;
//     }
  
//     const cartItem = {
//       productId: this.product.id,   // Assuming you have this field
//       productName: this.product.name,   // Assuming this field as well
//       price: this.product.price,    // Assuming this field as well
//       userId: this.userId          // Ensure you have this userId from the logged-in user
//     };
  
//     // Send the request to the backend
//     this.http.post('http://localhost:8083/api/shopping-cart/add', cartItem).subscribe(
//       (response) => {
//         alert('Product added to cart!');
//       },
//       (error) => {
//         console.error('Error adding product to cart:', error);
//         alert('Failed to add product to cart.');
//       }
//     );
//   }
  
  

//   buyNow(): void {
//     // Redirect to the checkout page with the selected product
//     this.router.navigate(['/checkout'], { state: { product: this.product } });
//   }
// }
