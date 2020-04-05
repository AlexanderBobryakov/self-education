import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AppCounterService} from "./services/app-counter.service";
import {CounterComponent} from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
