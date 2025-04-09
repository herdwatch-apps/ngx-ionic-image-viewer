import { enableProdMode } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { provideEnvironmentNgxIonicImageViewer } from '@herdwatch/ngx-ionic-image-viewer';
import appRoutes from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    providers: [
      BrowserModule,
      provideRouter(appRoutes),
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideIonicAngular(),
      StatusBar,
      SplashScreen,
      {
        provide: RouteReuseStrategy,
        useClass: IonicRouteStrategy,
      },
      provideEnvironmentNgxIonicImageViewer(),
    ],
  });

bootstrap().catch((err) => console.error(err));
