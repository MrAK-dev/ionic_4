import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  text = "Default starting text";
  onChangeText() {
    this.text = 'changed!';
  }
}
