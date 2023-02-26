import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {JwtService} from "../services/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    @Inject(Router) private router: Router,
    @Inject(JwtService) private jwt: JwtService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.jwt.estConnecte()) {
      window.alert("Accès non autorisé. Vilain.");
      this.router.navigate(['/co']);
    }
    return true;
  }

}
