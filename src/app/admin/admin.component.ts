// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { FooterComponent } from '../footer/footer.component';
// import { ProdService } from '../prod.service';

// @Component({
//   selector: 'app-admin',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule, FormsModule, NavbarComponent, FooterComponent],
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css'],
// })
// export class AdminComponent implements OnInit {
//   categories: any[] = [];
//   products: any[] = [];
//   newCategory = { name: '' };
//   newProduct = { name: '', price: 0, imageFile: null, categoryId: '' };

//   constructor(private productService: ProdService) {}

//   ngOnInit(): void {
//     this.fetchCategories();
//     this.fetchProducts();
//   }

//   fetchCategories() {
//     this.productService.getCategories().subscribe((data: any) => {
//       this.categories = data;
//     });
//   }

//   fetchProducts() {
//     this.productService.getProducts().subscribe((data: any) => {
//       this.products = data;
//     });
//   }

//   addCategory() {
//     this.productService.addCategory(this.newCategory).subscribe(() => {
//       this.fetchCategories();
//       this.newCategory.name = '';
//     });
//   }

//   deleteCategory(id: string) {
//     this.productService.deleteCategory(id).subscribe(() => {
//       this.fetchCategories();
//     });
//   }

//   // addProduct() {
//   //   const formData = new FormData();
//   //   formData.append('name', this.newProduct.name);
//   //   formData.append('price', this.newProduct.price.toString());
//   //   formData.append('categoryId', this.newProduct.categoryId);
//   //   if (this.newProduct.imageFile) {
//   //     formData.append('image', this.newProduct.imageFile); // Key must match backend API
//   //   }

//   //   this.productService.addProduct(formData).subscribe(() => {
//   //     this.fetchProducts();
//   //     this.newProduct = { name: '', price: 0, imageFile: null, categoryId: '' };
//   //   });
//   // }

//   addProduct() {
//     const formData = new FormData();
//     formData.append('name', this.newProduct.name);
//     formData.append('price', this.newProduct.price.toString());
//     formData.append('categoryId', this.newProduct.categoryId);
//     if (this.newProduct.imageFile) {
//       formData.append('image', this.newProduct.imageFile);
//     }
  
//     this.productService.addProduct(formData).subscribe(() => {
//       this.productService.updateProductsList(); // Notify all subscribers
//       this.newProduct = { name: '', price: 0, imageFile: null, categoryId: '' };
//     });
//   }
  

//   deleteProduct(id: string) {
//     this.productService.deleteProduct(id).subscribe(() => {
//       this.fetchProducts();
//     });
//   }

//   onImageUpload(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       this.newProduct.imageFile = file;
//     }
//   }

//   getCategoryName(categoryId: string) {
//     const category = this.categories.find((c) => c.id === categoryId);
//     return category ? category.name : 'Unknown';
//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ProdService } from '../prod.service';

// @Component({
//   selector: 'app-admin',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {
//   categories: any[] = [];
//   products: any[] = [];
//   newCategory = { name: '' };
//   newProduct = { name: '', price: 0, imageFile: null, categoryId: '' };

//   constructor(private productService: ProdService) {}

//   ngOnInit(): void {
//     this.fetchCategories();
//     this.fetchProducts();
//   }

//   fetchCategories(): void {
//     this.productService.getCategories().subscribe((data) => {
//       this.categories = data;
//     });
//   }

//   fetchProducts(): void {
//     this.productService.updateProductsList();
//   }

//   addCategory(): void {
//     this.productService.addCategory(this.newCategory).subscribe(() => {
//       this.fetchCategories();
//       this.newCategory.name = '';
//     });
//   }

//   deleteCategory(id: string): void {
//     this.productService.deleteCategory(id).subscribe(() => {
//       this.fetchCategories();
//     });
//   }

//   addProduct(): void {
//     const formData = new FormData();
//     formData.append('name', this.newProduct.name);
//     formData.append('price', this.newProduct.price.toString());
//     formData.append('categoryId', this.newProduct.categoryId);
//     if (this.newProduct.imageFile) {
//       formData.append('image', this.newProduct.imageFile);
//     }

//     this.productService.addProduct(formData).subscribe(() => {
//       this.fetchProducts();
//       this.newProduct = { name: '', price: 0, imageFile: null, categoryId: '' };
//     });
//   }

//   deleteProduct(id: string): void {
//     this.productService.deleteProduct(id).subscribe(() => {
//       this.fetchProducts();
//     });
//   }

//   onImageUpload(event: any): void {
//     const file = event.target.files[0];
//     if (file) {
//       this.newProduct.imageFile = file;
//     }
//   }
// }
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

  // Fetch Categories
  fetchCategories(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  // Fetch Products
  // fetchProducts(): void {
  //   this.productService.refreshProducts();
  // }

  fetchProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data; // Bind fetched products to the products array
    });
  }

  // Add Category
  addCategory(): void {
    this.productService.addCategory(this.newCategory).subscribe(() => {
      this.fetchCategories();
      this.newCategory.name = '';
    });
  }

  // Delete Category
  deleteCategory(id: string): void {
    this.productService.deleteCategory(id).subscribe(() => {
      this.fetchCategories();
    });
  }

  // Add Product
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

  // Delete Product
  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

  // Handle Image Upload
  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.newProduct.imageFile = file;
    }
  }
}
