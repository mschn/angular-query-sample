import { Component, inject } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss',
})
export class AnimalsComponent {
  animalsService = inject(AnimalsService);
  animals = this.animalsService.getAnimals();
}
