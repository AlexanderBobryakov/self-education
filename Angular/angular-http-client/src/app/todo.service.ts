import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";

export interface Todo {
  completed: boolean,
  title: string,
  id?: number,
}

@Injectable({
  providedIn: "root"
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=1')
      .pipe(
        delay(500)
      );
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}


