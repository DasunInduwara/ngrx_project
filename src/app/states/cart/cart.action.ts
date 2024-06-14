import { createAction, props } from '@ngrx/store';
import { Iproduct } from '../../shared/models/products.interface';

export const addToCart = createAction(
  '[Cart Component] AddToCart',
  props<{ product: Iproduct }>()
);
export const quantityIncrement = createAction(
  '[Cart Component] quantityIncrement',
  props<{ productId: number }>()
);
export const quantityDecrement = createAction(
  '[Cart Component] quantityDecrement',
  props<{ productId: number }>()
);
export const removeItem = createAction(
  '[Cart Component] RemoveItem',
  props<{ productId: number }>()
);
