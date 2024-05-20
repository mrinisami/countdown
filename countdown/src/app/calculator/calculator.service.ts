import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  operations: string[] = [];
  operation = new Subject<string>;

  constructor() {
    this.operation.pipe(
      tap(val => this.operations.push(val))
    ).subscribe()
  }

  addOperation(operation: string) {
    this.operation.next(operation);
  }

  clear() {
    this.operations = []
  }

  eraseLastOperation() {
    this.operations.pop()
  }
}
