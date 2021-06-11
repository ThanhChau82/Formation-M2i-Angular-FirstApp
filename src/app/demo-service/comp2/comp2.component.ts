import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  listePays : string[];
  p : string;

  constructor(private myService : DemoService) {
    this.listePays = [];
    this.p = "";
  }

  ngOnInit(): void {
    this.myService.sayHello();
    this.listePays = this.myService.pays;
  }

  ajouter() {
    this.myService.ajouterPays(this.p);
  }
}
