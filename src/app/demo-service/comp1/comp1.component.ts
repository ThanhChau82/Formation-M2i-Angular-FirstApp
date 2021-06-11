import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  listePays : string[];

  constructor(private myService : DemoService) {
    this.listePays = [];
  }

  ngOnInit(): void {
    this.myService.sayHello();
    this.listePays = this.myService.pays;
  }

}
