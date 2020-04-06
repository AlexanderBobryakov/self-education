import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {AboutComponent} from './about/about.component'
import {HomeComponent} from './home/home.component'
import {PostsComponent} from './posts/posts.component'
import {PostComponent} from './post/post.component'
import {AboutExtraComponent} from './about-extra/about-extra.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    AboutExtraComponent,
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
