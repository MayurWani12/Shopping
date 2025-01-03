


import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdService } from '../prod.service';
import { AddviewComponent } from "../addview/addview.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, AddviewComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
 
  private images: string[] = [
    'https://www.shutterstock.com/image-photo/trendy-beautiful-young-asian-woman-260nw-1590685858.jpg',
    'https://png.pngtree.com/background/20231031/original/pngtree-d-render-of-shopping-online-with-cart-and-credit-card-on-picture-image_5816759.jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20240104/pngtree-vector-texture-banner-boost-your-online-sales-with-exclusive-shopping-deals-image_13896244.png',
    'https://t4.ftcdn.net/jpg/05/39/99/67/360_F_539996737_T5gJEIEqsGUjMXhrLZt0lDLcrOWsSHlb.jpg',
  ];
  private currentIndex: number = 0;


  categories = [
    { name: 'Electronics', image: 'https://i.pcmag.com/imagery/roundups/01hiB08j7yaJGJmPl2YhRRH-59..v1713199550.jpg' },
    { name: 'Fashion', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGXmVmKMupNca5NrMEckYMcfWBcf1KI8tRw&s' },
    { name: 'Home Appliances', image: 'https://images.hindustantimes.com/img/2024/07/22/1600x900/post_deals_sale_on_amazon_1721620441622_1721620441819.jpg' },
    { name: 'Books', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQs8xbIseku59onHMpZ6bQ3XaeaSjeLgzMQ&s' },
    { name: 'Sports', image: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg' },
    { name: 'Toys', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGXmVmKMupNca5NrMEckYMcfWBcf1KI8tRw&s' },
  ];

  product = [
    { name: 'Smartphone', price: 20000, image: 'https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj-1200-80.jpg' },
    { name: 'Laptop', price: 50000, image: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg' },
    { name: 'Headphones', price: 11199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfrED4IFQqKsNDYfHdx2hONUDO8SjBEgwXQ&s' },
    { name: 'Philips Air Dryer', price: 24000, image: 'https://m.media-amazon.com/images/I/311os8SaajL._SX300_SY300_QL70_FMwebp_.jpg' },
    { name: 'Shoes', price: 8449, image: 'https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=' },
    { name: 'Samsung Tv', price: 30000, image: 'https://electronicparadise.in/cdn/shop/files/71D-2oAb5JL._SL1500.jpg?v=1707478816&width=1406' },
    { name: 'Laptop', price: 1299, image: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg' },
    { name: 'Samsung S23 Ultra', price: 11199, image: 'https://m.media-amazon.com/images/I/71goZuIha-L.jpg' },
    { name: 'Watch', price: 1500000, image: 'https://cdn.shopclues.com/images1/thumbnails/109089/320/320/150550611-109089554-1651653901.jpg' },
    { name: 'Whirlpool 244L', price: 84490, image: 'https://m.media-amazon.com/images/I/5134E0Z7iwL._SL1308_.jpg' },
    { name: 'Whirlpool Washing', price: 184490, image: 'https://m.media-amazon.com/images/I/711Q61ue+DL._SL1500_.jpg' },
    { name: 'MicroOven', price: 34000, image: 'https://m.media-amazon.com/images/I/41QU9HbPXoL._SY445_SX342_QL70_FMwebp_.jpg' },
    { name: 'Fire Tv Swick', price: 4000, image: 'https://m.media-amazon.com/images/I/51IaZPnHhiL._SX569_.jpg' },
    { name: 'Travel Bag', price: 8000, image: 'https://m.media-amazon.com/images/I/41FNw7ihOCL._SY300_SX300_.jpg' },
    { name: 'Aqua Guard', price: 15000, image: 'https://m.media-amazon.com/images/I/41rQ7ZORBtL._SX300_SY300_QL70_FMwebp_.jpg' },
  ];

  filteredProducts = this.product;
  products: any[] = [];

  constructor(private productService: ProdService) {}

  ngOnInit(): void {
  

    
    this.initSlider();
    this.productService.products$.subscribe((data) => {
      this.products = data;
    });
    this.productService.refreshProducts();
  }

  private initSlider(): void {
    this.updateBackground();
    this.addEventListeners();
    this.startImageSlider();  
  }

  private updateBackground(): void {
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    heroSection.style.backgroundImage = `url('${this.images[this.currentIndex]}')`;
  }

  private addEventListeners(): void {
    const prevBtn = document.querySelector('.prev-btn') as HTMLElement;
    const nextBtn = document.querySelector('.next-btn') as HTMLElement;

    prevBtn?.addEventListener('click', () => this.showPreviousImage());
    nextBtn?.addEventListener('click', () => this.showNextImage());
  }

  private showPreviousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateBackground();
  }

  private showNextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateBackground();
  }

  private startImageSlider(): void {
    setInterval(() => {
      this.showNextImage();
    }, 4000); 
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  filterByCategory(category: string): void {
    this.filteredProducts = this.products.filter((product) => product.category === category);
  }

 


 

}


