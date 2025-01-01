import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pr {
  private apiUrl = 'http://localhost:8083/api/products';
  public products$ = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  // Existing method to get all products
  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  

  // New method to get product by name
  getProductByName(name: string) {
    return this.http.get<any>(`${this.apiUrl}/${name}`);
  }

  refreshProducts() {
    this.getProducts().subscribe((data) => {
      this.products$.next(data);
    });
  }
}
