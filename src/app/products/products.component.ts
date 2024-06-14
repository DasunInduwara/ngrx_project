import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { Iproduct } from '../shared/models/products.interface';
import { ProductApiServiceService } from '../shared/services/product-api.service.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  http = inject(HttpClient);
  productApi = inject(ProductApiServiceService);
  products$ = this.http.get('https://fakestoreapi.com/products') as Observable<
    Iproduct[]
  >;

  constructor(private store: Store<{ cart: { products: Iproduct[] } }>) {}

  ngOnInit(): void {
    // this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
    //   console.log(res);
    // });
  }

  addItemToCart(product: Iproduct) {
    this.store.dispatch(addToCart({ product }));
  }
}
