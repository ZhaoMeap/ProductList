import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // --- Params
  items: Product[] = [];

  // --- Constructor
  constructor(private http: HttpClient) { }

  // --- Functions
  addToCart(product: Product){
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type:string, price:number}[]>('assets/shipping.json');
  }

}
