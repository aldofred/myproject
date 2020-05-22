import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { myComponent } from './myComponent';

@NgModule({
  declarations: [
    myComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [myComponent]
})
export class AppModule { }
