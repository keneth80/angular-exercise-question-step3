import { enableProdMode, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
      if (console && console.log) {
          console.log('application load success');
      }
    })
    .catch(err => console.error(err));
