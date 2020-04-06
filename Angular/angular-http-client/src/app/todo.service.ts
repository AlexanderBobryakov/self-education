import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, delay} from "rxjs/operators";

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
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers: new HttpHeaders({
        'MyCustomHeader': Math.random().toString()
      })
    })
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?', {
      // params: new HttpParams().set('_limit', '3')
      params: new HttpParams().append('_limit', '4').append('custom', 'wwrewe')
    })
      .pipe(
        delay(500),
        catchError(err => {
          console.log(err);
          return throwError(err)
        })
      );
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  competeTodo(id: number):Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }
}


