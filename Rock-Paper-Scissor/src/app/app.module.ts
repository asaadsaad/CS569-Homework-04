import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score.component';
import { RockButtonComponent } from './rock-button.component';
import { PaperButtonComponent } from './paper-button.component';
import { ScissorButtonComponent } from './scissor-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    RockButtonComponent,
    PaperButtonComponent,
    ScissorButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
