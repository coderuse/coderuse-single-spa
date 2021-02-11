import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetListComponent } from './alphabet/alphabet-list/alphabet-list.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: 'hello-angular/alphabet', pathMatch: 'full', component: AlphabetListComponent },
  { path: '**', component: EmptyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
