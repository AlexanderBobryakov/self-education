import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'  // [] - чтобы это превратилось в атрибут
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input('dStyles') dStyles: {
    border: string,
    fontWeight: string,
    borderRadius: string
  };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(elementRef.nativeElement, 'color', 'blue');
  }

  @HostListener('click', ['$event']) onCLick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.dStyles.border);
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', 'normal');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', null);
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', null);
  }
}
