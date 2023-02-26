import {Inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(
    @Inject(Router) private router: Router
  ) {
  }

  /**
   * Récupération du token dans le localStorage
   */
  public getToken(): string | null {
    return localStorage.getItem('jwt');
  }


  /**
   * Suppression du jeton dans le localstorage
   * Redirection vers la page de login
   */
  public logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['/co']).then(r => console.log(r))
  }

  /**
   * Utilisé dans le gardien
   * Retourne vrai si un token est présent
   * dans le local storage
   */
  public estConnecte(): boolean {
    const token = localStorage.getItem('jwt');
    return token !== null;
  }
}
