import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const utilService = this.injector.get(UtilService);

    if (utilService.token) {
      if (
        request.headers.get('authorization') !==
        ''
      ) {
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${utilService.token}`,
          },
        });
        return next.handle(authRequest);
      } else {
        return next.handle(request);
      }
    } else {
      const otherRequest = request.clone({});
      return next.handle(otherRequest);
    }
  }
}
