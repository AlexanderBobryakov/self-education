import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'},  // ленивая загрузка модуля - старый вариант
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(module => module.AboutPageModule)},  // ленивая загрузка модуля - новый вариант
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules  // стратегия загрузки модулей (сначала все необходимое для страницы, а потом в фоне все модули)
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
