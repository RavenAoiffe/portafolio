import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
              withInMemoryScrolling({
              anchorScrolling: 'enabled',
              // Optional: specify scroll position restoration behavior
              scrollPositionRestoration: 'enabled', 
      })
  )]
};
