import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Pour utiliser les bindings pour les formulaires
import { BrowserModule } from '@angular/platform-browser'; // Translateur (interpréter le code compilé) pour les navigateurs

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TdFormComponent } from './td-form/td-form.component';
import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TdFormComponent,
    ParentComponent,
    FilsComponent
  ],
  imports: [ // Importer les bibliothèques/modules externes
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Module à charger par défaut
})
export class AppModule { }
