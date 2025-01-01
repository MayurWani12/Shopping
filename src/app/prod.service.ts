// 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdService {
  private baseUrl = 'http://localhost:8083/api'; // Replace with your backend URL

  // Observables for Products and Categories
  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Categories API
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categories`, category);
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/categories/${categoryId}`);
  }

  // Products API
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }

  addProduct(product: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/${productId}`);
  }

  getProductById(id: string) {
    return this.http.get<any>(`http://localhost:8083/api/products/${id}`);
  }

  // Update Product List
  refreshProducts(): void {
    this.getProducts().subscribe((products) => {
      this.productsSubject.next(products);
    });
  }
}
