import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardTitle, IonChip, IonContent, IonHeader, IonProgressBar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { EmitFromInputDirective } from 'src/app/core/emit-from-input.directive';
import { ButtonComponent } from 'src/app/core/button/button.component';
import { MathService } from 'src/app/services/math.service';
import { Observable, Subject, filter, interval, of, skipUntil, take, tap } from 'rxjs';
import { ClockService } from 'src/app/services/clock/clock.service';
import { ProgressComponent } from 'src/app/core/progress/progress.component';
import { Timer } from 'src/app/services/clock/models';
import { Router } from '@angular/router';
import { routes } from 'src/app/routes';

@Component({
  selector: 'number-selection',
  templateUrl: './number-selection.html',
  styleUrls: ['./number-selection.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    EmitFromInputDirective, ButtonComponent, IonCard, IonCardTitle, IonCardContent, IonChip, ProgressComponent, IonProgressBar],
})
export class NumberSelection implements OnInit {
  private clockService = inject(ClockService);
  private mathService = inject(MathService);
  private router: Router = inject(Router);
  generatedNbs: number[] = this.mathService.numbers
  progress: Observable<Timer> = this.clockService.progress
  chipText: string = "Select your next number";
  timer: number = 1;

  constructor() { }

  ngOnInit() {
    this.progress.pipe(tap(timer => {
      this.timer = timer.bar
      this.chipText = `Game starts in ${Math.abs(timer.timeLeft).toFixed(1)}`
    })).subscribe()
    this.clockService.isDone
      .pipe(
        tap(() => this.router.navigate([routes.mathGame(1)]))
      ).subscribe()
  }

  generateSmallNb() {
    this.mathService.generateSmallNb();
  }

  generateLargeNb() {
    this.mathService.generateLargeNb();
  }
}
