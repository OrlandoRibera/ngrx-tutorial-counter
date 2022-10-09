import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
import { Counter } from '../interfaces/counter.interface';

export const initialState: Counter = {
  value: 0
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (counter, params) => ({ value: counter.value + params.value })),
  on(decrement, (counter, params) => ({ value: counter.value - params.value })),
  on(reset, (counter) => ({ value: 0 }))
);
