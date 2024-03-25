import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent {
  icone: string = 'home';

  orderBy(tipo: number){
    switch(tipo){
      case 1: 
        console.log('Ordenar por pai');
        break;
      case 2: 
        console.log('Ordenar por mae');
        break;
      case 3: 
        console.log('Ordenar por valor');
        break;
    }
  }

}
