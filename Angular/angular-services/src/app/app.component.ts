import {Component} from '@angular/core';
import {AppCounterService} from "./services/app-counter.service";
import {LocalCounterService} from "./services/local-counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService] // Локально зарегистрировали сервис
})
export class AppComponent {

  constructor(public appCounterService: AppCounterService,
              public localCounterService: LocalCounterService
  ) {

  }

}
