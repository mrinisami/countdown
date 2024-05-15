import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { routes as allRoutes } from 'src/app/routes';
import { ButtonComponent } from 'src/app/core/button/button.component';
import { Router } from '@angular/router';
import { EmitFromInputDirective } from 'src/app/core/emit-from-input.directive';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ButtonComponent, IonGrid, IonRow, IonCol, EmitFromInputDirective],
  providers: [Router]
})
export class HomePage {
  routes = allRoutes

  private router = inject(Router);

  constructor() { }

  test(route: string) {
    this.router.navigate([route]);
  }
}
