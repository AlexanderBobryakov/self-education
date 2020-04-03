import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  e: number = Math.E;
  float: number = 0.423346;
  str: string = "hello world";
  date: Date = new Date()

}
