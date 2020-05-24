import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score.component';
import { ButtonAppComponent } from './button.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ButtonAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
