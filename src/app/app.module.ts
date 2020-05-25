import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { MybuttonSTComponent } from './mybutton-s-t.component';
import { ScoreSTComponent } from './score-s-t.component';

@NgModule({
  declarations: [
    AppComponent,
    // MybuttonSTComponent,
    ScoreSTComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
