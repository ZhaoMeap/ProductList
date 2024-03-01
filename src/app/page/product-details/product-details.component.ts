import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../modules/product';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // --- Params
  product: Product | undefined;

  // --- Constructors
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  // --- Functions
  ngOnInit(){
    // --- First get the product id from current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // --- Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
