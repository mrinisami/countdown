import { Component, Input, OnInit } from '@angular/core';
import { IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  standalone: true,
  imports: [IonProgressBar]
})
export class ProgressComponent implements OnInit {
  @Input()
  progress: number;

  constructor() { }

  ngOnInit() {
    console.log(this.progress)
  }

}
