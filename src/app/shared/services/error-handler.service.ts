import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService extends ErrorHandler {
  constructor(
    private zone: NgZone,
    private injector: Injector,
    private alertService: AlertService
  ) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any): void {
    if (errorResponse instanceof HttpErrorResponse) {
      const router = this.injector.get(Router);

      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.alertService.error(
              '401 - Unauthorized',
              'Token de autenticação expirado, realize o login novamente.',
              'OK'
            );
            router.navigate(['/auth/login']);
            break;
          default:
            this.alertService.error(
              'Houve um problema',
              'Tente novamente mais tarde ou entre em contato com suporte',
              'OK'
            );
            break;
        }
      });
    }
    super.handleError(errorResponse);
  }
}
