import {Component} from '@angular/core';
import {interval, Observable, Subject, Subscription} from 'rxjs'
import {map, filter, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  subscription: Subscription; // результат работы метода subscribe
  stream$: Subject<number> = new Subject<number>();

  constructor() {
    const intervalStream$ = interval(1000); // вернет стрим
    this.subscription = intervalStream$
      // pipe позволяет применять несколько операторов к стриму
      .pipe(
        filter(value => value % 2 === 0),
        map((value => `Mapped Value ${value}`)),
      )
      // подписываемся на событие
      .subscribe((value) => {
        // value хранит каждую секунду новое значение = 0, 1, 2, 3...
      });


    // СВОЙ СТРИМ через Observable
    const stream$ = new Observable(observer => { // observer
      observer.next(1);
      observer.error('ERROR');
      observer.complete(); // Завершает стрим
    });
    this.subscription = stream$
      .subscribe(
        value => {console.log(value)},
        error => {console.log(error)},
        () => {console.log("COMPLETE")}

        );
    this.subscription.unsubscribe();

    // СВОЙ СТРИМ через Subject
    this.subscription = this.stream$.subscribe(value => {
      console.log(value);
    })

  }

  stop() {
    // отписываемся от события
    this.subscription.unsubscribe();
  }

  next() {
    this.stream$.next(Math.random())
  }
}
