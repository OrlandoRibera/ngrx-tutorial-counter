import { createAction, props } from '@ngrx/store';
import { Counter } from '../interfaces/counter.interface';

export const increment = createAction(
  '[Counter Component] Increment',
  props<Counter>()
);
export const decrement = createAction(
  '[Counter Component] Decrement',
  props<Counter>()
);
export const reset = createAction(
  '[Counter Component] Reset',
  props<Counter>()
);
