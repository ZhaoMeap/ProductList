import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // --- Params
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  })

  // --- Constructors
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ){ }

  // --- Functions
  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
