import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nom de la balise pour intégrer ce composant dans le template de AppComponent
  templateUrl: './app.component.html', // Le chemin relatif pour retrouver le template associé à ce composant. Possible d'utiliser template et passer directement le code HTML
  styleUrls: ['./app.component.css']  // Feuille de style propre à ce composant
})
export class AppComponent {
  title = 'Formation-M2i-Angular-FirstApp';
}
