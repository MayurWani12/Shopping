import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { AddviewComponent } from "../addview/addview.component";

@Component({
  selector: 'app-h',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent, CommonModule, ProductComponent],
  templateUrl: './h.component.html',
  styleUrl: './h.component.css'
})
export class HComponent implements OnInit {


  searchTerm: string = ''; // Define a property to store the search term

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm; // Store the search term in the property
  }

 
  // categories = [
  //   { name: 'Electronics', image: 'assets/electronics.jpg' },
  //   { name: 'Fashion', image: 'assets/fashion.jpg' },
  //   { name: 'Home Appliances', image: 'assets/home.jpg' },
  //   { name: 'Books', image: 'assets/books.jpg' },
  //   { name: 'Sports', image: 'assets/sports.jpg' },
  //   { name: 'Toys', image: 'assets/toys.jpg' }
  // ];

  // products = [
  //   { name: 'Smartphone', price: 999, image: 'assets/product1.jpg' },
  //   { name: 'Laptop', price: 1299, image: 'assets/product2.jpg' },
  //   { name: 'Headphones', price: 199, image: 'assets/product3.jpg' },
  //   { name: 'Watch', price: 299, image: 'assets/product4.jpg' },
  //   { name: 'Shoes', price: 89, image: 'assets/product5.jpg' },
  //   { name: 'Backpack', price: 49, image: 'assets/product6.jpg' },
    
  //   // Add more products as needed
  // ];


  

  ngOnInit() {}
}