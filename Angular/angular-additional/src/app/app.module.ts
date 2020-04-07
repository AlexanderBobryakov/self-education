import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
