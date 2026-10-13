import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.log('Unauthorized');
      } else if (error.status === 403) {
        console.log('Forbidden');
      } else if (error.status === 500) {
        console.log('Server Error');
      } else if (error.status === 0) {
        console.error('Network or DNS error:', error.message);
        console.log('An error occurred:', error.message);
        console.log('An error status:', error.status);
    }

      return throwError(() => error);
    })
  );