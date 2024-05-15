import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[baseEmit]',
  standalone: true,
})
export class EmitFromInputDirective {
  @Output()
  toInfo = new EventEmitter<string>();

  @Input()
  info: string;

  @HostListener('click', ['$event']) onClick() {
    this.toInfo.emit(this.info)
  }

  constructor() { }
}
