import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, delay, map, tap} from "rxjs/operators";

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
      params: new HttpParams().append('_limit', '4').append('custom', 'wwrewe'),
      observe: "response"  // observe - То что хотим получать из ответа
                      // body - по умолчанию получаем сам body
                      // response - получаем весь resposnse
                      // 'events' - получаем доступ ко всем событиям в асинхронном запросе на всех этапах
    })
      .pipe(
        map(response => response.body),
        delay(500),
        catchError(err => {
          console.log(err);
          return throwError(err)
        })
      );
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        observe: 'events'  // получаем доступ ко всем событиям в асинхронном запросе на всех этапах
      }).pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log('response event', event);
          }
        })
    );
  }

  competeTodo(id: number):Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true,
    }, {
      responseType: "json"
    });
  }
}


