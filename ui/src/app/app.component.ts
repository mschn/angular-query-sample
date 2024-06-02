import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AngularQueryDevtools],
  templateUrl: './app.component.html',
})
export class AppComponent {
  routes = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/animals',
      label: 'Animals',
    },
  ];
}
