import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  // Get all products
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }

  // Get a single product by ID
  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`);
  }

  // Get cart items for a user
  getCart(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cart/${userId}`);
  }

  // Add product to cart
  addToCart(userId: number, productId: number): Observable<any> {
    const cartItem = { userId, productId }; // Sending userId and productId as JSON body
    return this.http.post<any>(`${this.apiUrl}/cart/add`, cartItem); // Ensure the correct API endpoint URL
  }
  

  // Remove product from cart
  removeFromCart(userId: number, productId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cart/remove/${userId}/${productId}`);
  }

  // Update quantity of a product in the cart
  updateCart(userId: number, productId: number, quantity: number): Observable<any> {
    const cartItem = { userId, productId, quantity };
    return this.http.put<any>(`${this.apiUrl}/cart/update`, cartItem);
  }

  // Checkout cart and process payment
  checkoutCart(userId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cart/checkout/${userId}`, {});
  }

  // getProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  // Add a new product
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  // Update an existing product
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }

  // Delete a product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, category);
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categories/${categoryId}`);
  }

}
