/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { provideRouter } from '@angular/router';
import routeConfig  from './app/routes';
import { AppComponent } from './app/app.component';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/');


bootstrapApplication(AppComponent, {providers: [provideRouter(routeConfig)]}).catch((err) =>
  console.error(err),
);
