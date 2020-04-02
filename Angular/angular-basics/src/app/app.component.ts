import '@angular/compiler';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic TITLE';
  number = 42;
  arr = [1, 2, 3];
  obj = {
    a1: 1,
    a2: 'name1',
  };
  image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';
  inputValue = '';

  constructor() {
    setTimeout(() => {
      this.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
    }, 5000);
  }

  onInput(event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onBlur(str: string) {
   this.inputValue = str;
  }

  onClick($event: MouseEvent) {
    console.log('CLICK');
  }
}
