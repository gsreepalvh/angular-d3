import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import 'zone.js';
import { AppModule } from './app/app.module';

/*@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
} */
platformBrowserDynamic()
.bootstrapModule(AppModule)
.then((ref) => {
  // Ensure Angular destroys itself on hot reloads.
  

  // Otherwise, log the boot error
})
.catch((err) => console.error(err));

//bootstrapApplication(App);
