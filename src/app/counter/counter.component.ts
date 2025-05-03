import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/counter.actions';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../store/app.state';
import { selectCount, selectCounterState, selectUserData } from '../store/counter.selector';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number> = new Observable<number>;
  userData$: Observable<string> = new Observable<string>;
  constructor(private store: Store<AppState>) {
    this.count$ = store.select(selectCount);
    this.userData$ = store.select(selectUserData);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
