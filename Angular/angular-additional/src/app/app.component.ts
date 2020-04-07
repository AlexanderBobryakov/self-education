import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modal = false;

  @ViewChild(RefDirective) refDirective: RefDirective;

  constructor(private resolver: ComponentFactoryResolver) {
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

