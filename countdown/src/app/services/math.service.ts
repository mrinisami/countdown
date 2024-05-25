import { Injectable, inject } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { ClockService } from './clock/clock.service';
import { Store } from '@ngrx/store';
import { addGameNumbers } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  clockService = inject(ClockService)
  store = inject(Store);
  numbers: number[] = [3, 4, 5, 10, 25];
  numberToCompute = this.generateNbToCompute()
  generatedNbSubject = new Subject<number>;

  constructor() {
    this.generatedNbSubject.pipe(
      tap(number => {
        this.numbers.push(number)
        if (this.numbers.length === 5) {
          this.clockService.startTimer(2)
          this.store.dispatch(addGameNumbers({ numbers: this.numbers, gameNumber: this.generateNbToCompute() }))
        }
      })
    ).subscribe()
  }

  generateSmallNb() {
    this.generatedNbSubject.next(Math.floor((Math.random() * 9) + 1));
  }

  generateLargeNb() {
    const possibleNumbers = [10, 25, 50, 75, 100];
    const index = Math.floor((Math.random() * 5));

    this.generatedNbSubject.next(possibleNumbers[index]);
  }

  generateNbToCompute(): number {
    return Math.floor((Math.random() * 900) + 100)
  }
}
