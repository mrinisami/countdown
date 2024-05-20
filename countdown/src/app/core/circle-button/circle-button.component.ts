import { Component, Input, OnInit } from '@angular/core';
import { EmitFromInputDirective } from '../emit-from-input.directive';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
  standalone: true
})
export class CircleButtonComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  disabled: boolean;

  constructor() { }

  ngOnInit() { }

}
