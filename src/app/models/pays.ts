export class Pays {
  id : number;
  nom : string;
  langue : string;
  drapeau : string;
  capitale : string;

  constructor(id : number, nom : string, langue : string, drapeau : string, capitale : string) {
    this.id = id;
    this.nom = nom;
    this.langue = langue;
    this.drapeau = drapeau;
    this.capitale = capitale;
  }
}
