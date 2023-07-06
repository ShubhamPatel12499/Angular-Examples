import { Component, OnInit } from '@angular/core';
import { cartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: string[];

  constructor(private cartService: cartService) {
    this.cartItems = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  addToCart() {
    const item = 'Product';
    this.cartService.addItem(item);
  }

  removeItemFromCart(item: string) {
    this.cartService.removeItem(item);
  }

  ngOnInit(): void {
  }

}
