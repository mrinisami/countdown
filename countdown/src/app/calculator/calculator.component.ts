import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmark, checkmarkCircle, sendOutline } from 'ionicons/icons'
import { operations } from './operations';
import { Store } from '@ngrx/store';
import { selectGameInfo } from '../store/selectors';
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
  imports: [IonGrid, IonRow, IonCol, IonButton, IonIcon, CommonModule, CircleButtonComponent, EmitFromInputDirective, OperatorDirective]
})
export class CalculatorComponent implements OnInit {
  private mathService = inject(MathService);
  private calculatorService = inject(CalculatorService)
  operators = operations.map(val => this.addDisabledState(val))
  numbers = this.mathService.numbers.map(val => this.addDisabledState(val.toString()))
  operations: string[] = this.calculatorService.operations

  constructor() {
    addIcons({ sendOutline, checkmarkCircle, checkmark })
  }

  ngOnInit() { }

  addOperation(value: DisablableInput) {
    this.calculatorService.addOperation(value.value);
    this.setDisableState(value);
  }

  addDisabledState(value: string): DisablableInput {
    return ({ value, disabled: false })
  }

  private setDisableState(value: DisablableInput) {
    if (this.numbers.find(val => val.value === value.value)) {
      this.operators.forEach(val => val.disabled = false)
      this.numbers.forEach(val => val.disabled = true)
    }

    if (this.operators.find(val => val.value === value.value)) {
      this.numbers.filter(nb => !this.operations.includes(nb.value))
        .forEach(val => val.disabled = false)
      this.operators.forEach(val => val.disabled = true)
    }
  }
}

export interface DisablableInput {
  disabled: boolean;
  value: string;
}