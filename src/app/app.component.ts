import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customDirectives';
  getV !: string ;
  getEmitedVal(ab : string){
    this.getV = ab
  }
}
