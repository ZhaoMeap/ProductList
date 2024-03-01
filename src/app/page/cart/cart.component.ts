import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // --- Params
  items = this.cartService.getItems();

  // --- Constructors
  constructor(private cartService: CartService){}

}
