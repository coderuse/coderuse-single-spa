import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetListComponent } from './alphabet/list/list.component';

const routes: Routes = [
  { path: 'alphabet', component: AlphabetListComponent },
  { path: '**', component: AlphabetListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
