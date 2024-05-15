import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardTitle, IonChip, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { EmitFromInputDirective } from 'src/app/core/emit-from-input.directive';
import { ButtonComponent } from 'src/app/core/button/button.component';
import { MathService } from 'src/app/services/math.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'number-selection',
  templateUrl: './number-selection.html',
  styleUrls: ['./number-selection.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    FormsModule, EmitFromInputDirective, ButtonComponent, IonCard, IonCardTitle, IonCardContent, IonChip],
  providers: [MathService]
})
export class NumberSelection implements OnInit {
  private mathService = inject(MathService);
  generatedNbSubject = new Subject<number>;
  generatedNbs: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  generateSmallNb() {
    this.generatedNbs.push(this.mathService.generateSmallNb());
  }

  generateLargeNb() {
    this.generatedNbs.push(this.mathService.generateLargeNb());
  }
}
