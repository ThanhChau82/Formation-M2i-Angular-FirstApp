import { Component } from "@angular/core";

@Component({
    selector : 'app-first',
    templateUrl : './first.component.html'
})
export class FirstComponent{
  titre = "Exemple d'interpolation";
  url = "https://images.app.goo.gl/aKMjRY2SQqmYZviM9";

  afficherBonjour() : string {
    return "Bonjour";
  }
}
