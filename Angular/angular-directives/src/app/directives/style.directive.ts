import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'  // [] - чтобы это превратилось в атрибут
})
export class StyleDirective {
  // параметры передаваемые из шаблона
  @Input('appStyle') color: string = 'blue';
  @Input('dStyles') dStyles: {
    border: string,
    fontWeight: string,
    borderRadius: string
  };

  // простой способ забайндить параметр дом-элемента
  @HostBinding('style.text-align') textAlign = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(elementRef.nativeElement, 'color', 'blue');
  }

  // листенер на событие по текущему дом-элементу
  @HostListener('click', ['$event']) onCLick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.dStyles.border);
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    this.textAlign = 'right'
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', 'normal');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', null);
    this.textAlign = 'left'
  }
}
