import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent,FormsModule,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {
  product: any;
  // products = [
    // { name: 'Smartphone', price: 1999, image: 'https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj-1200-80.jpg', description: 'High-end smartphone with great features.' },
    // { name: 'Laptop', price: 1299, image: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg', description: 'Powerful laptop for work and gaming.' },
    // { name: 'Headphones', price: 11199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfrED4IFQqKsNDYfHdx2hONUDO8SjBEgwXQ&s', description: 'Noise-canceling headphones for immersive sound.' },
    // { name: 'Watch', price: 29449, image: 'https://cdn.shopclues.com/images1/thumbnails/109089/320/320/150550611-109089554-1651653901.jpg', description: 'Stylish smartwatch with fitness tracking.' },
    // { name: 'Shoes', price: 8449, image: 'https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=', description: 'Comfortable and stylish shoes for all occasions.' },



  // ];

   products = [
    {
      name: 'Smartphone',
      price: 20000,
      image: 'https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj-1200-80.jpg',
      description: 'High-end smartphone with great features.',
    },
    {
      name: 'Laptop',
      price: 50000,
      image: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg',
      description: 'Powerful laptop for work and gaming.',
    },
    {
      name: 'Headphones',
      price: 11199,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfrED4IFQqKsNDYfHdx2hONUDO8SjBEgwXQ&s',
      description: 'Noise-canceling headphones for immersive sound.',
    },
    {
      name: 'Philips Air Dryer',
      price: 24000,
      image: 'https://m.media-amazon.com/images/I/311os8SaajL._SX300_SY300_QL70_FMwebp_.jpg',
      description: 'Efficient air dryer for quick and easy styling.',
    },
    {
      name: 'Shoes',
      price: 8449,
      image: 'https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=',
      description: 'Comfortable and stylish shoes for all occasions.',
    },
    {
      name: 'Samsung Tv',
      price: 30000,
      image: 'https://electronicparadise.in/cdn/shop/files/71D-2oAb5JL._SL1500.jpg?v=1707478816&width=1406',
      description: 'Smart TV with 4K resolution for a cinematic experience.',
    },
    {
      name: 'Samsung S23 Ultra',
      price: 11199,
      image: 'https://m.media-amazon.com/images/I/71goZuIha-L.jpg',
      description: 'Premium smartphone with advanced camera features.',
    },
    {
      name: 'Watch',
      price: 1500000,
      image: 'https://cdn.shopclues.com/images1/thumbnails/109089/320/320/150550611-109089554-1651653901.jpg',
      description: 'Luxury watch with timeless design and craftsmanship.',
    },
    {
      name: 'Whirlpool 244L',
      price: 84490,
      image: 'https://m.media-amazon.com/images/I/5134E0Z7iwL._SL1308_.jpg',
      description: 'Spacious refrigerator with advanced cooling technology.',
    },
    {
      name: 'Whirlpool Washing',
      price: 184490,
      image: 'https://m.media-amazon.com/images/I/711Q61ue+DL._SL1500_.jpg',
      description: 'Efficient washing machine for large loads.',
    },
    {
      name: 'MicroOven',
      price: 34000,
      image: 'https://m.media-amazon.com/images/I/41QU9HbPXoL._SY445_SX342_QL70_FMwebp_.jpg',
      description: 'Microwave oven with multiple cooking modes.',
    },
    {
      name: 'Fire Tv Stick',
      price: 4000,
      image: 'https://m.media-amazon.com/images/I/51IaZPnHhiL._SX569_.jpg',
      description: 'Streaming device for easy access to your favorite content.',
    },
    {
      name: 'Travel Bag',
      price: 8000,
      image: 'https://m.media-amazon.com/images/I/41FNw7ihOCL._SY300_SX300_.jpg',
      description: 'Durable and spacious travel bag for all your needs.',
    },
    {
      name: 'Aqua Guard',
      price: 15000,
      image: 'https://m.media-amazon.com/images/I/41rQ7ZORBtL._SX300_SY300_QL70_FMwebp_.jpg',
      description: 'Water purifier with advanced filtration technology.',
    },
  ];
  

  remainingProducts: any[] = [
    {
      name: 'Laptop',
      price: 1299,
      image: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Headphones',
      price: 199,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfrED4IFQqKsNDYfHdx2hONUDO8SjBEgwXQ&s',
    },
    {
      name: 'Watch',
      price: 299,
      image: 'https://cdn.shopclues.com/images1/thumbnails/109089/320/320/150550611-109089554-1651653901.jpg',
    },
    {
      name: 'Shoes',
      price: 89,
      image: 'https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=',
    },
  ];

  constructor(private route: ActivatedRoute,private router:Router,private http:HttpClient) {}

  ngOnInit() {
    const productName = this.route.snapshot.params['id'];
    this.product = this.products.find((p) => p.name === productName);
  }
  viewProduct(product: any): void {
    this.router.navigate(['/product', product.name]); // Adjust the route as needed
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


