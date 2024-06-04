import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './animal.component.html',
})
export class AnimalComponent {
  #route = inject(ActivatedRoute);
  #animalsService = inject(AnimalsService);

  id = toSignal(
    this.#route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      filter(Boolean),
    ),
    { initialValue: '' },
  );
  animal = this.#animalsService.getAnimal(this.id);
}
