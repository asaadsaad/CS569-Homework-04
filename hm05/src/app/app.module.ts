import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RockComponent } from './rock.component';
import { PaperComponent } from './paper.component';
import { ScissorsComponent } from './scissors.component';
import { ScoreComponent } from './score.component';

@NgModule({
  declarations: [
    AppComponent,
    RockComponent,
    PaperComponent,
    ScissorsComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
