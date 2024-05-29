import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
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
