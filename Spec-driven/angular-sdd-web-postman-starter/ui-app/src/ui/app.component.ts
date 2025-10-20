import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <main style="font-family: system-ui; padding:16px">
    <h1>Web Postman</h1>
    <nav><a routerLink="/">Builder</a> | <a routerLink="/collections">Collections</a></nav>
    <router-outlet></router-outlet>
  </main>
  `
})
export class AppComponent {}
