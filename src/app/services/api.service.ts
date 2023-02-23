import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sortie} from "../modeles/sortie";
import {Hydra} from "../modeles/hydra";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL: string = 'http://localhost:8000/api/';

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
  }

  public getSorties(): Observable<Hydra<Sortie>> {
    return this.http.get<Hydra<Sortie>>(this.URL + 'sorties');
  }
}
