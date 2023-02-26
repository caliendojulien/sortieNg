import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Sortie} from "../../modeles/sortie";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../services/api.service";
import {Hydra} from "../../modeles/hydra";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-sorties',
  templateUrl: './sorties.component.html',
  styleUrls: ['./sorties.component.scss']
})
export class SortiesComponent implements AfterViewInit {

  public chargement: boolean;
  public donnees: Sortie[];
  public colonnes: string[];

  constructor(
    @Inject(ApiService) private api: ApiService
  ) {
    this.chargement = true;
    this.donnees = [];
    this.colonnes = [
      'nom',
      'debut',
      'duree',
      'limite',
      'max',
      'infos',
      'actions'
    ];
  }

  public ngAfterViewInit(): void {
    this.api.getSorties().subscribe(
      data => {
        this.donnees = data["hydra:member"];
        this.chargement = false;
      }
    );
  }

}
