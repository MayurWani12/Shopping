// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private apiUrl = 'http://localhost:8083/api/cart'; 

//   constructor(private http: HttpClient) {}

//   getCartItems(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   updateCartItem(item: any): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/${item.id}`, item);
//   }

//   removeCartItem(itemId: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/${itemId}`);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8083/api/cart';

  constructor(private http: HttpClient) {}

  getCartItems(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }

  updateCartItem(item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${item.id}`, item);
  }

  removeCartItem(itemId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${itemId}`);
  }
}






// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private apiUrl = 'http://localhost:8080/api/shopping-cart';  // Your API endpoint for cart operations

//   constructor(private http: HttpClient) {}

//   // Get all cart items
//   getCartItems(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}`);
//   }

//   // Update a cart item (e.g., quantity)
//   updateCartItem(item: any): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/update`, item);
//   }

//   // Remove a cart item
//   removeCartItem(itemId: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/remove`, { body: { productId: itemId } });
//   }
// }
