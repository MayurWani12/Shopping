

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
  product: any; 

  constructor(
    private route: ActivatedRoute, 
    private productService: ProdService,
    private router: Router, 
    private http: HttpClient 
  ) {}

  ngOnInit(): void {

    const productName = this.route.snapshot.paramMap.get('name');

   
    this.productService.products$.subscribe((products) => {
      this.product = products.find((p: any) => p.name === productName);
      if (!this.product) {
        alert('Product not found!');
        this.router.navigate(['/']); 
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
  
    const userId = 1; 
  
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






