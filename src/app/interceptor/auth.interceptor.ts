import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {JwtService} from "../services/jwt.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    @Inject(JwtService) private api: JwtService
  ) {
  }

  /**
   * Si un token est dans le localstorage
   * On l'insère dans toutes les requetes
   * RAF
   *
   * @param req
   * @param next
   */
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.api.getToken();
    if (token) {
      req = req.clone(
        {
          setHeaders: {
            Authorization: "Bearer " + token
          }
        }
      );
    }
    return next.handle(req);
  }

}
