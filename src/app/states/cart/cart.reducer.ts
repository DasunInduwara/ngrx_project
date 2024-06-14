import { createReducer, on } from '@ngrx/store';
import { Iproduct } from '../../shared/models/products.interface';
import {
  addToCart,
  quantityDecrement,
  quantityIncrement,
  removeItem,
} from './cart.action';

export interface CartState {
  products: Iproduct[];
  totalPrice?: number;
}

export const initialCartState: CartState = {
  products: [],
};

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => {
    const updatedProducts = [...state.products, product];
    return {
      ...state,
      products: updatedProducts,
    };
  }),

  on(quantityIncrement, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
    };
  }),

  on(quantityDecrement, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
    };
  }),

  on(removeItem, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id !== productId
    );

    return {
      ...state,
      products: updatedProducts,
    };
  })
);
