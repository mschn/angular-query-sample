import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';
import { filter, map } from 'rxjs';
import { Animal } from '../model/animals.model';
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
  animal: CreateQueryResult<Animal, Error> | null = null;

  constructor(destroyRef: DestroyRef) {
    this.#route.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        filter(Boolean),
        takeUntilDestroyed(destroyRef),
      )
      .subscribe((id) => (this.animal = this.#animalsService.getAnimal(id)));
  }
}
