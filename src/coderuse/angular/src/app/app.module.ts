import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphabetListComponent } from './alphabet/alphabet-list/alphabet-list.component';
import { AlphabetLetterComponent } from './alphabet/alphabet-letter/alphabet-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabetListComponent,
    AlphabetLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
