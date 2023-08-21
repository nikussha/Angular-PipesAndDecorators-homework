import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { status } from './interface-person';
@Directive({
  selector: '[btndirective]',
})
export class buttonDirective implements AfterViewInit {
  @Input() btndirective = status.Active || status.Inactive || status.Deleted;
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    switch (this.btndirective) {
      case status.Active: {
        this.el.nativeElement.style.backgroundColor = 'green';
        break;
      }
      case status.Inactive: {
        this.el.nativeElement.style.backgroundColor = 'blue';
        break;
      }
      case status.Deleted: {
        this.el.nativeElement.style.backgroundColor = 'red';
        break;
      }
    }
  }
}
