import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('environment:', environment);
    console.log('Request:', req);
  // Only log in development
  if (environment.production) {
    return next(req);
  }

  const startTime = Date.now();
  
  // Log the outgoing request
  console.group(`HTTP Request: ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  if (req.body) {
    console.log('Body:', req.body);
  }
  console.groupEnd();

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          const duration = Date.now() - startTime;
          
          // Log the response
          console.group(`HTTP Response: ${req.method} ${req.url} - ${event.status} (${duration}ms)`);
          console.log('Headers:', event.headers);
          console.log('Body:', event.body);
          console.groupEnd();
        }
      },
      error: (error: HttpErrorResponse) => {
        const duration = Date.now() - startTime;
        
        // Log the error response
        console.group(`HTTP Error: ${req.method} ${req.url} - ${error.status} (${duration}ms)`);
        console.error('Error:', error.error);
        console.error('Message:', error.message);
        console.groupEnd();
      }
    }),
    tap(() => {console.log('Completed request/response to ', req.url);}),
  );
};