import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-displaycounter',
  imports: [AsyncPipe],
  templateUrl: './displaycounter.component.html',
  styleUrl: './displaycounter.component.css'
})
export class DisplaycounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
