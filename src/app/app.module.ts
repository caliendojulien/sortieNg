import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccueilComponent} from './composants/accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
import {CoComponent} from './composants/co/co.component';
import {SortiesComponent} from './composants/sorties/sorties.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatBadgeModule} from "@angular/material/badge";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {Paginator} from "./modeles/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CoComponent,
    SortiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: Paginator}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
