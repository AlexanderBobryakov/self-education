import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from "rxjs/operators";

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
  loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };
    this.loading = true;
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(response => {
        console.log(response);
        this.todos.unshift(response);
        this.todoTitle = '';
        this.loading = false;
      })
  }

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=1')
      .pipe(
        delay(1000)
      )
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      })
  }

  removeTodo(id: number) {
    this.loading = true;
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(response => {
        this.todos = this.todos.filter(t => t.id != id);
        this.loading = false;
      })
  }
}
