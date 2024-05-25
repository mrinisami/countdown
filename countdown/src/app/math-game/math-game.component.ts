import { Component, OnInit, inject } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';
import { IonIcon, IonProgressBar, IonText } from '@ionic/angular/standalone';
import { MathService } from '../services/math.service';
import { NgFor, NgIf } from '@angular/common';
import { CircleButtonComponent } from '../core/circle-button/circle-button.component';


@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.scss'],
  standalone: true,
  imports: [CalculatorComponent, IonText, IonIcon, NgFor, CircleButtonComponent, NgIf, IonProgressBar],
})
export class MathGameComponent implements OnInit {
  private mathService = inject(MathService);
  targetNb = this.mathService.numberToCompute;
  eligibleNbs = this.mathService.numbers;
  answer: number;
  answerColor: string;

  constructor() { }

  ngOnInit() {
  }

  displayAnswer(answer: number) {
    this.answer = answer
  }
}
