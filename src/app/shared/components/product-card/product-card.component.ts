import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Iproduct } from '../../models/products.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Iproduct;
  @Output() handleAdd = new EventEmitter();

  addToCart(product: Iproduct) {
    this.handleAdd.emit(product);
  }
}
