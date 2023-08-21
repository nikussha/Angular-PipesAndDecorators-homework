import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { status } from './interface-person';

@Directive({
  selector: '[appColors]',
})
export class ColorsDirective implements AfterViewInit {
  @Input() appColors = status.Active || status.Deleted || status.Inactive;
  @Input() btnColor = status.Active || status.Deleted || status.Inactive;
  constructor(private el: ElementRef) {}

  @HostListener('click')
  yellowbackground() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngAfterViewInit(): void {
    switch (this.appColors) {
      case status.Active: {
        this.el.nativeElement.style.backgroundColor = 'green';

        break;
      }

      case status.Deleted: {
        this.el.nativeElement.style.backgroundColor = 'red';
        break;
      }

      case status.Inactive: {
        this.el.nativeElement.style.backgroundColor = 'blue';
        break;
      }
    }
  }
}
