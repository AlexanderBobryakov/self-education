import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomePageComponent, pathMatch: 'full'},
    {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'},  // ленивая загрузка модуля - старый вариант
    {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(module => module.AboutPageModule)},  // ленивая загрузка модуля - новый вариант
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
