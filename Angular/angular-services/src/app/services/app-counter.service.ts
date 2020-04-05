import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({
  providedIn: "root" // регистрация сервиса в корневом модуле
})
export class AppCounterService {
  counter = 0;

  constructor(private logService: LogService) {
  }
  increase() {
    this.logService.log("increase Counter");
    this.counter++;
  }

  decrease() {
    this.logService.log("decrease Counter");
    this.counter--;
  }
}
