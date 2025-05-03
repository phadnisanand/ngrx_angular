import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { increment, decrement, reset } from '../counter.actions';
import { selectCount, selectUserData } from '../counter.selector';
import { AppState } from '../app.state';

@Component({
  selector: 'app-displaycounter',
  imports: [AsyncPipe],
  templateUrl: './displaycounter.component.html',
  styleUrl: './displaycounter.component.css'
})
export class DisplaycounterComponent {
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
