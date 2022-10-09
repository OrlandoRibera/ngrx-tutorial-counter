import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/app/interfaces/counter.interface';
import { decrement, increment, reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  public counter: number;
  public modifyBy: number;

  private _count$: Observable<Counter>;

  constructor(private store: Store<{ count: Counter }>) {
    this.counter = 0;
    this.modifyBy = 1;

    this._count$ = store.select('count');
    this._count$.subscribe((counter) => {
      this.counter = counter.value;
    });
  }

  public increment(): void {
    if (!this.modifyBy) {
      alert('Value is not a number');
      return;
    }
    this.store.dispatch(increment({ value: this.modifyBy }));
  }

  public decrement(): void {
    if (!this.modifyBy) {
      alert('Value is not a number');
      return;
    }
    this.store.dispatch(decrement({ value: this.modifyBy }));
  }

  public reset(): void {
    if (!this.modifyBy) {
      alert('Value is not a number');
      return;
    }
    this.store.dispatch(reset({ value: 0 }));
  }
}
