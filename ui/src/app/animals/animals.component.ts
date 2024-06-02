import { Component, inject } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { RouterLink } from '@angular/router';
import { AnimalTypeColors } from '../model/animals.model';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './animals.component.html',
})
export class AnimalsComponent {
  animalsService = inject(AnimalsService);
  animals = this.animalsService.getAnimals();
  AnimalTypeColors = AnimalTypeColors;
}
