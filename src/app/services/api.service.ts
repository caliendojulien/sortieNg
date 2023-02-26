import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Sortie} from "../modeles/sortie";
import {Hydra} from "../modeles/hydra";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL: string = 'https://localhost:8000/';

  constructor(
    @Inject(HttpClient) private http: HttpClient,
    @Inject(Router) private router: Router
  ) {
  }

  public getSorties(): Observable<Hydra<Sortie>> {
    return this.http.get<Hydra<Sortie>>(this.URL + 'api/sorties');
  }

  /**
   * Requete POST asynchrone pour récupérer
   * le token JWT fourni par APIplatform
   *
   * @param email
   * @param mdp
   */
  public getjwt(email: string, mdp: string): Subscription {
    let connection = {
      email: email,
      password: mdp
    }
    return this.http.post<any>(this.URL + 'auth', connection).subscribe(
      res => {
        localStorage.setItem('jwt', res.token);
        this.router.navigate(['/sorties']);
      }
    );
  }

}
