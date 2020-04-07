import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private  router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
  {
    return this.authService.isAuthentificated().then(isAuth => {
      if (isAuth) {
        return true;
      } else {
        // редирект на страницу для любого пользовтеля
        this.router.navigate(['/'], {
          queryParams: {
            auth: false
          }
        })
      }
    })
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.canActivate(childRoute, state)
  }



}
