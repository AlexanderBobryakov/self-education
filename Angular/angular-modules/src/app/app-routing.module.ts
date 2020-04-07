import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'
import {AboutPageComponent} from './about-page/about-page.component'
import {AboutExtraPageComponent} from './about-page/about-extra-page/about-extra-page.component'

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'about', component: AboutPageComponent, children: [
        {path: 'extra', component: AboutExtraPageComponent}
      ]
    },
    {path: '', component: HomePageComponent, pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
