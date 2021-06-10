import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pays } from '../models/pays';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  @Input('paysActif') paysActif : Pays;
  @Output() actionModifiee = new EventEmitter<string>();

  constructor() {
    this.paysActif = <Pays>{};
  }

  ngOnInit(): void {
  }

  ressetPays() {
    this.actionModifiee.emit("");
  }
}
