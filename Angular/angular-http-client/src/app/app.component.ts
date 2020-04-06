import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Todo {
  completed: boolean,
  title: string,
  id?: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(response => {
        this.todos = response;
      })
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(response => {
        console.log(response);
        this.todos.unshift(response);
        this.todoTitle = '';
      })
  }
}
