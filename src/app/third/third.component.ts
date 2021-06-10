import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pays } from '../models/pays';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  @Input('paysActif') paysActif : Pays;

  constructor() {
    this.paysActif = <Pays>{};
  }

  ngOnInit(): void {
  }

  modifierPays(f : NgForm) {

  }
}
