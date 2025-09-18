import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { reviewsReducer } from './app/state/reviews/reducer';
import { loggingInterceptor } from './app/core/interceptors/logging.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([loggingInterceptor])),
    provideRouter(routes, withComponentInputBinding()),
    provideStore({
      reviews: reviewsReducer,
    })
  ]
}).catch(err => console.error(err));
