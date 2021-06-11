import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // ce service se trouve à la racine du projet, il sera utilisable dans tous les composant.
})
export class DemoService {
  pays : string[];

  constructor() {
    console.log("Je suis le constructeur de service");
    this.pays = ["France", "Italie", "Espagne"];
  }

  sayHello() {
    console.log("Hello !");
  }
}
