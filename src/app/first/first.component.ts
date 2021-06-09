import { Component } from "@angular/core";

@Component({
    selector : 'app-first',
    templateUrl : './first.component.html'
})
export class FirstComponent{
  titre = "Exemple d'interpolation";

  afficherBonjour() : string {
    return "Bonjour";
  }
}
