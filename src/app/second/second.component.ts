import { Component, OnInit } from '@angular/core';
import { Pays } from '../models/pays';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  paysTab: string[];
  pays: Pays[];
  paysActif : number;

  constructor() {
    this.paysTab = [];
    this.pays = [];
    this.paysActif = 0;
  }

  ngOnInit(): void {
    this.paysTab = ["France", "Italie", "Espagne"];

    this.pays = [
      new Pays(1, "France", "français", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png", "Paris"),
      new Pays(2, "Italie", "italien", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/langfr-225px-Flag_of_Italy.svg.png", "Rome"),
      new Pays(3, "Espage", "espagnol", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Spain_flag_construction_sheet.svg/220px-Spain_flag_construction_sheet.svg.png", "Madrid")
    ]

    this.paysActif = 0;
  }

  activerPays(id: number) {
    this.paysActif = id;
  }

}
