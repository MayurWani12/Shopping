import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-electronic',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './electronic.component.html',
  styleUrl: './electronic.component.css'
})
export class ElectronicComponent implements OnInit {

  products = [
    {
      name: 'Smartphone',
      price: 20000,
      image: 'https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj-1200-80.jpg',
    },
    {
      name: 'Laptop',
      price: 50000,
      image: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Headphones',
      price: 11199,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfrED4IFQqKsNDYfHdx2hONUDO8SjBEgwXQ&s',
    },
    {
      name: 'Philips Air Dryer',
      price: 24000,
      image: 'https://m.media-amazon.com/images/I/311os8SaajL._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      name: 'Shoes',
      price: 8449,
      image: 'https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=',
    },
    {
      name: 'Samsung Tv',
      price: 30000,
      image: 'https://electronicparadise.in/cdn/shop/files/71D-2oAb5JL._SL1500.jpg?v=1707478816&width=1406',
    },
    {
      name: 'Laptop',
      price: 1299,
      image: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Samsung S23 Ultra',
      price: 11199,
      image: 'https://m.media-amazon.com/images/I/71goZuIha-L.jpg',
    },
    {
      name: 'Watch',
      price: 1500000,
      image: 'https://cdn.shopclues.com/images1/thumbnails/109089/320/320/150550611-109089554-1651653901.jpg',
    },
    // {
    //   name: 'Whirlpool 244L',
    //   price: 84490,
    //   image: 'https://m.media-amazon.com/images/I/5134E0Z7iwL._SL1308_.jpg',
    // },
    {
      name: 'Whirlpool Washing',
      price: 184490,
      image: 'https://m.media-amazon.com/images/I/711Q61ue+DL._SL1500_.jpg',
    },
    {
      name: 'MicroOven',
      price: 34000,
      image: 'https://m.media-amazon.com/images/I/41QU9HbPXoL._SY445_SX342_QL70_FMwebp_.jpg',
    },
    {
      name: 'Fire Tv Swick',
      price: 4000,
      image: 'https://m.media-amazon.com/images/I/51IaZPnHhiL._SX569_.jpg',
    },
    {
      name: 'Travel Bag',
      price: 8000,
      image: 'https://m.media-amazon.com/images/I/41FNw7ihOCL._SY300_SX300_.jpg',
    },
    {
      name: 'Aqua Guard',
      price: 15000,
      image: 'https://m.media-amazon.com/images/I/41rQ7ZORBtL._SX300_SY300_QL70_FMwebp_.jpg',
    },
  ];
  product: any;
  constructor(private route: ActivatedRoute,private router:Router,private http:HttpClient) {}

  ngOnInit() {
    const productName = this.route.snapshot.params['id'];
    this.product = this.products.find((p) => p.name === productName);
  }
  viewProduct(product: any): void {
    this.router.navigate(['/product', product.name]);
  }



  addToCart(): void {
    const cartItem = {
      productId: this.product.id,
      productName: this.product.name,
      productImage: this.product.image,
      price: this.product.price,
      quantity: 1 // Default quantity
    };
  
    this.http.post('http://localhost:8083/api/cart', cartItem).subscribe(
      (response) => {
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