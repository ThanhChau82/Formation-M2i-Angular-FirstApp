import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input('msg') message : string | undefined;

  constructor() {
    //this.message = "Hello from fils !"
  }

  ngOnInit(): void {
  }

}
