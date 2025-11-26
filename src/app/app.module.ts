import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssHeighlighter, CssHeighlighter1, CssHeighlighter2, CssHeighlighter3, CssHeighlighter4, CssHeighlighter5, CssHeighlighter6, CssHeighlighter7, CssHeighlighter8, CssHeighlighter9 } from './shared/directives/cssHeighlighter';
import { ToLowercaseDirective } from './shared/directives/to-lowercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssHeighlighter,
    CssHeighlighter1,
    CssHeighlighter2,
    CssHeighlighter3,
    CssHeighlighter4,
    CssHeighlighter5,
    CssHeighlighter6,
    CssHeighlighter7,
    CssHeighlighter8,
    CssHeighlighter9,
    ToLowercaseDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
