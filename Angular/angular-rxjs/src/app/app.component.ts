import {Component} from '@angular/core';
import {interval, Subscription} from 'rxjs'
import {map, filter, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  subscription: Subscription; // результат работы метода subscribe

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
  }

  stop() {
    // отписываемся от события
    this.subscription.unsubscribe();
  }
}
