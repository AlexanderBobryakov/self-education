import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root" // регистрация сервиса в корневом модуле
})
export class AppCounterService {
  counter = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
