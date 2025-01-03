



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




