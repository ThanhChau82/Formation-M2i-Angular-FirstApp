import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  pays: string[];

  constructor() {
    this.pays = [];
  }

  ngOnInit(): void {
    this.pays = ["France", "Italie", "Espagne", "Allemagne"]
  }

}
