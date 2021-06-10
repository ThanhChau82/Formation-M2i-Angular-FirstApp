import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pays } from '../models/pays';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  @Input('paysActif') paysActif : Pays;
  @Output() paysModifie = new EventEmitter<Pays>();
  @Output() actionModifiee = new EventEmitter<string>();

  constructor() {
    this.paysActif = <Pays>{};
  }

  ngOnInit(): void {
  }

  modifierPays(f : NgForm) {
    this.paysActif.nom = f.value.nom;
    this.paysActif.langue = f.value.langue;
    this.paysActif.drapeau = f.value.drapeau;
    this.paysActif.capitale = f.value.capitale;
    this.paysModifie.emit(this.paysActif);
    this.actionModifiee.emit("");
  }

}
