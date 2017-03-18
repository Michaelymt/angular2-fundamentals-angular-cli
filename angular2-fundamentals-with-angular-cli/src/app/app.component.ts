import { Component } from '@angular/core';

interface Pasajero {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Lista de Pasajeros</h3>
      <ul>
        <template ngFor let-pasajero let-i="index" [ngForOf]="pasajeros">
          <li>
            {{ i }}: {{ pasajero.fullname }}
          </li>
        </template>
      </ul>
      <h3>Lista de pasajeros (versión más utilizada)</h3>
      <ul>
        <li *ngFor="let pasajero of pasajeros; let i = index;">
          {{ i }}: {{ pasajero.fullname }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  pasajeros: Pasajero[] = [{
    id: 1,
    fullname: 'Elias',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Felipe',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'Deborah',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Maria',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Daniel',
    checkedIn: false
  }];
}
