import {Directive, HostBinding, OnInit} from '@angular/core'

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @HostBinding('style.color') color: string

  ngOnInit(): void {
    this.color = '#aaa'
  }
}
