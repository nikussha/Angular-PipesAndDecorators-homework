import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[boxdirective]',
})
export class boxDirective {
  @HostListener('mouseenter')
  greenBackground() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave')
  revertBackground() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = ' red';
  }
}
