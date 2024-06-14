import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { selectCartProducts } from '../states/cart/cart.selector';
import { CommonModule } from '@angular/common';
import {
  quantityDecrement,
  quantityIncrement,
  removeItem,
} from '../states/cart/cart.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems$ = this.store.select(selectCartProducts);
  constructor(private store: Store<AppState>) {}

  handleIncrement(productId: number) {
    this.store.dispatch(quantityIncrement({ productId }));
  }
  handleDecrement(productId: number) {
    this.store.dispatch(quantityDecrement({ productId }));
  }

  removeItem(productId: number) {
    this.store.dispatch(removeItem({ productId }));
  }
}
