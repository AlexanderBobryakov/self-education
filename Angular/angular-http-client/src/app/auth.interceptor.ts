import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request', req);

    const cloned = req.clone({
      headers: req.headers.append('tttttt', 'TESTSETSETSET')
    });

    return next.handle(cloned);
  }

}
