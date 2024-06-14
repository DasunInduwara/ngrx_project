import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { Observable } from 'rxjs';
import { Iproduct } from './shared/models/products.interface';
import { Store } from '@ngrx/store';
import { AppState } from './states/app.state';
import { selectCartProducts } from './states/cart/cart.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx_project';
  products$: Observable<Iproduct[]>;

  constructor (private store: Store<AppState>){
    this.products$ = this.store.select(selectCartProducts);
  }
}
