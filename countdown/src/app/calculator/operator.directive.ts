import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DisablableInput } from './calculator.component';

@Directive({
  selector: '[appOperator]',
  standalone: true
})
export class OperatorDirective {
  @Output()
  toInfo = new EventEmitter<DisablableInput>();

  @Input()
  info: DisablableInput;

  @HostListener('click', ['$event']) onClick() {
    if (!this.info.disabled) this.toInfo.emit(this.info)
  }

  constructor() { }

}
