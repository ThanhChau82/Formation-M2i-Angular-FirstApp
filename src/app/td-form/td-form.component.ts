import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pays } from '../models/pays';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  p : Pays;
  //@Input('pays') pays : Pays[];
  @Output() newPays = new EventEmitter<Pays>();

  constructor() {
    this.p = <Pays>{};
    //this.pays = [];
  }

  ngOnInit(): void {
  }

  validerFormulaire(f : NgForm) {
    //console.log(f);
    this.p = new Pays(f.value.id, f.value.nom, f.value.langue, f.value.drapeau, f.value.capitale);
    //this.pays.push(this.p);
    this.newPays.emit(this.p);
  }
}
