import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'app-first',
    templateUrl : './first.component.html'
})
export class FirstComponent implements OnInit{
  ngOnInit(): void {
    this.url = this.url1;
  }
  titre = "Ex d'interpolation";
  url = "";
  url1 = "https://w7.pngwing.com/pngs/224/196/png-transparent-web-development-angularjs-javascript-vue-js-world-wide-web-thumbnail.png";
  url2 = "https://w7.pngwing.com/pngs/421/958/png-transparent-angularjs-javascript-web-application-others-angle-logo-sign-thumbnail.png";

  afficherBonjour() : string {
    return "Bonjour";
  }

  changerLogoAngular() {
    if (this.url = this.url1) {
      this.url = this.url2;
    } else {
      this.url = this.url1;
    }

  }
}
