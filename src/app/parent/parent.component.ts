import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message : string;
  reponse : string;

  constructor() {
    this.message = "Hello from parent !";
    this.reponse = "";
  }

  ngOnInit(): void {
  }

  afficherReponse(res : string) {
    this.message = res;
  }

}
