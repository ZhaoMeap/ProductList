import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  // --- Params
  shippingCosts!: Observable<{type:string, price:number}[]>;

  // --- Constructors
  constructor(private cartService:CartService) { }

  // --- Functions
  ngOnInit(): void{
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
