
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdService } from '../prod.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { OrdersComponent } from "../orders/orders.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  categories: any[] = [];
  products: any[] = [];
  newCategory = { name: '' };
  newProduct = { name: '', price: 0, imageFile: null, categoryId: '' };

  constructor(private productService: ProdService) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProducts();
  }

  
  fetchCategories(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

 

  fetchProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data; 
    });
  }


  addCategory(): void {
    this.productService.addCategory(this.newCategory).subscribe(() => {
      this.fetchCategories();
      this.newCategory.name = '';
    });
  }


  deleteCategory(id: string): void {
    this.productService.deleteCategory(id).subscribe(() => {
      this.fetchCategories();
    });
  }


  addProduct(): void {
    const formData = new FormData();
    formData.append('name', this.newProduct.name);
    formData.append('price', this.newProduct.price.toString());
    formData.append('categoryId', this.newProduct.categoryId);
    if (this.newProduct.imageFile) {
      formData.append('image', this.newProduct.imageFile);
    }

    this.productService.addProduct(formData).subscribe(() => {
      this.fetchProducts();
      this.newProduct = { name: '', price: 0, imageFile: null, categoryId: '' };
    });
  }

  
  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }


  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.newProduct.imageFile = file;
    }
  }
}
