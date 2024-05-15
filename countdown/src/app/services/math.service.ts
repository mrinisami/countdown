import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() { }

  generateSmallNb(): number {
    return Math.floor(Math.random() * 10);
  }

  generateLargeNb(): number {
    const possibleNumbers = [10, 25, 50, 75, 100];
    const index = Math.floor((Math.random() * 5));

    return possibleNumbers[index];
  }

  generateNbToCompute(): number {
    return Math.floor((Math.random() * 900) + 100)
  }
}
