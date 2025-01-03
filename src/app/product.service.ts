import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }


  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`);
  }


  getCart(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cart/${userId}`);
  }


  addToCart(userId: number, productId: number): Observable<any> {
    const cartItem = { userId, productId }; 
    return this.http.post<any>(`${this.apiUrl}/cart/add`, cartItem); 
  }

  removeFromCart(userId: number, productId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cart/remove/${userId}/${productId}`);
  }


  updateCart(userId: number, productId: number, quantity: number): Observable<any> {
    const cartItem = { userId, productId, quantity };
    return this.http.put<any>(`${this.apiUrl}/cart/update`, cartItem);
  }


  checkoutCart(userId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cart/checkout/${userId}`, {});
  }


  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

 
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }

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
