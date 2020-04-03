import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'  // [] - чтобы это превратилось в атрибут
})
export class StyleDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(elementRef.nativeElement, 'color', 'green');
  }

  @HostListener('click', ['$event']) onCLick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red')
  }
}
