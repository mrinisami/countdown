import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { backspaceOutline, trashOutline } from 'ionicons/icons'
import { Operations, operations } from './operations';
import { CircleButtonComponent } from '../core/circle-button/circle-button.component';
import { EmitFromInputDirective } from '../core/emit-from-input.directive';
import { MathService } from '../services/math.service';
import { CalculatorService } from './calculator.service';
import { OperatorDirective } from './operator.directive';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonButton, IonIcon, CommonModule, CircleButtonComponent, EmitFromInputDirective, OperatorDirective],
})
export class CalculatorComponent implements OnInit {
  private calculatorService = inject(CalculatorService)
  operators = this.calculatorService.operators;
  numbers = this.calculatorService.numbers;
  operations: string[] = this.calculatorService.operations

  @Output()
  answerEvent = new EventEmitter<number>();

  constructor() {
    addIcons({ trashOutline, backspaceOutline })
  }

  ngOnInit() { }

  computeAnswer() {
    this.answerEvent.next(this.calculatorService.compute());
  }

  addOperation(value: DisablableInput) {
    this.calculatorService.addOperation(value);
  }

  eraseLastOperation() {
    this.calculatorService.eraseLastOperation();
  }

  clearOperations() {
    this.calculatorService.clear()
  }
}

export interface DisablableInput {
  disabled: boolean;
  value: string;
}