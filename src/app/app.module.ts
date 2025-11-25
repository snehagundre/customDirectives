import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssHeighlighter, CssHeighlighter1, CssHeighlighter2, CssHeighlighter3, CssHeighlighter4 } from './shared/directives/cssHeighlighter';

@NgModule({
  declarations: [
    AppComponent,
    CssHeighlighter,
    CssHeighlighter1,
    CssHeighlighter2,
    CssHeighlighter3,
    CssHeighlighter4
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
