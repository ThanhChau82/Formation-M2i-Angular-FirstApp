import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input('msg') message : string | undefined;
  @Output() eventReponse = new EventEmitter<string>();
  reponse : string;

  constructor() {
    //this.message = "Hello from fils !";
    this.reponse = "";
  }

  ngOnInit(): void {
  }

  sendResponse() {
    this.eventReponse.emit(this.reponse);
  }

}
