import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';

  isButtonDisabled() {
    if (this.username === null || this.username === '') {
      return true;
    } else {
      return false;
    }
  }

}
