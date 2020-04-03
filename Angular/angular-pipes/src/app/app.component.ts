import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  id: number,
  title: string,
  content: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  e: number = Math.E;
  float: number = 0.423346;
  str: string = "hello world";
  date: Date = new Date();

  /*для фильтрации*/
  search: string = '';
  posts: Post[] = [
    {id: 2, title: "FIRST 2", content: "rth65 e65 5egr 64 y4w5y 4 54w45y e546 5e6 "},
    {id: 3, title: "FIRST 3", content: "23534  y56y "},
    {id: 4, title: "FIRST 4", content: "trgrtg4354 3 dh y"},
  ];

  addPost() {
    this.posts.unshift(
    {id: Math.random(), title: "FIRST 1", content: "trgrtgtdtr rth d hdh dh dh y"}
    )
  }

  /*Для ASYNC*/
  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(()=> {
      resolve('Promise Resolved')
    }, 4000)
  });
  dateObservable: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  });

  ngOnInit(): void {
    this.dateObservable.subscribe(date => {
      this.date = date
    })
  }

}
