import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {delay} from "rxjs/operators";
import {Todo, TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle: string = '';
  loading = false;
  error: string = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    this.loading = true;
    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false,
    })
      .subscribe(response => {
        this.todos.unshift(response);
        this.todoTitle = '';
        this.loading = false;
      })
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.fetchTodos()
      .subscribe(response => {
          this.todos = response;
          this.loading = false;
        },
        error => {
          let er = error as HttpErrorResponse;
          this.error = er.message;
        },
        () => {

        }
      )
  }

  removeTodo(id: number) {
    this.loading = true;
    this.todoService.deleteTodo(id)
      .subscribe(response => {
        this.todos = this.todos.filter(t => t.id != id);
        this.loading = false;
      })
  }

  completeTodo(id: number) {
    this.todoService.competeTodo(id)
      .subscribe(response => {
        this.todos.find(t => t.id === id).completed = true;
      })
  }
}
