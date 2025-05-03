
import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DisplaycounterComponent } from './displaycounter/displaycounter.component';

export const routes: Routes = [
    {path: '', redirectTo:'counter', pathMatch:'full'},
    { path: 'counter', component: CounterComponent },
    { path: 'display', component: DisplaycounterComponent },
];
