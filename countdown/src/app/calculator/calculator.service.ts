import { Injectable, inject } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Operations, operations } from './operations';
import * as math from 'mathjs'
import { DisablableInput } from './calculator.component';
import { MathService } from '../services/math.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private mathService = inject(MathService);
  operations: string[] = [];
  operation = new Subject<string>;
  operators = this.addDisabledStateOperators(operations)
  numbers = this.mathService.numbers.map(val => this.addDisabledState(val.toString(), false));

  constructor() {
    this.operation.pipe(
      tap(val => {
        this.operations.push(val);
      })
    ).subscribe()
  }

  compute() {
    const expression = this.operations.join(' ').replace(operations.multiply, '\u002A').replace(operations.substraction, '-');
    return math.evaluate(expression);
  }

  addOperation(operation: DisablableInput) {
    if (operation.value === operations.parenthesis) {
      this.operation.next(this.addParenthesis())
    }
    else { this.operation.next(operation.value); }

    this.setDisableState(operation)
  }

  addParenthesis() {
    const lastElement = this.operations[this.operations.length - 1];
    const isNumber = /^\d+$/.test(lastElement);

    if (isNumber && this.shouldCloseParenthesis()) return ')'

    return '('
  }

  shouldCloseParenthesis() {
    const closedParenthesisCount = this.operations.filter(operation => operation === ')').length
    const openParenthesisCount = this.operations.filter(operation => operation === '(').length
    return openParenthesisCount >= closedParenthesisCount && openParenthesisCount > 0
  }

  clear() {
    this.operations.length = 0;
    this.operators.filter(op => op.value !== operations.parenthesis).forEach(val => val.disabled = true)
    this.numbers.forEach(val => val.disabled = false);
  }

  eraseLastOperation() {
    this.operations.pop()
  }

  addDisabledStateOperators(operators: Operations) {
    const mappedOperators = Object.entries(operators).map(op => ({ operator: op[0], value: op[1], disabled: true }))
    mappedOperators.filter(operator => operator.value === operations.parenthesis).forEach(operator => operator.disabled = false);

    return mappedOperators
  }

  private setDisableState(value: DisablableInput) {
    if (this.numbers.find(val => val.value === value.value)) {
      this.operators.forEach(val => val.disabled = false)
      this.numbers.forEach(val => val.disabled = true)
    }

    if (this.operators.find(val => val.value === value.value)) {
      this.numbers.filter(nb => !this.operations.includes(nb.value))
        .forEach(val => val.disabled = false)
      this.operators.filter(op => op.value !== operations.parenthesis).forEach(val => val.disabled = true)
    }
  }


  addDisabledState(value: string, disabled: boolean): DisablableInput {
    return ({ value, disabled })
  }
}
