import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modal = false;

  @ViewChild(RefDirective) refDirective: RefDirective;

  constructor(private resolver: ComponentFactoryResolver,
              private title: Title,
              private meta: Meta
  ) {
    const t = title.getTitle(); // title приложения angular-additional
    meta.addTags([{name: ' keywords', content: ' angular, google, app'}]); // добавляем мета информацию в meta тэги
  }

  // показываем динамически модальное окно
  showModal() {
    let modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    // помещаем modalFactory в шаблон
    this.refDirective.containerRef.clear();

    const component = this.refDirective.containerRef.createComponent(modalFactory);
    component.instance.title = 'Dynamic Title';
    component.instance.close.subscribe(() => {
      this.refDirective.containerRef.clear();
    });
  }
}

