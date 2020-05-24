import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {child} from './child.component';
// import { GradChild}  from './grandChild.component';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score.component';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
