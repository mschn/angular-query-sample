import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AnimalsService } from '../services/animals.service';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';
import { Animal } from '../model/animals.model';
import { filter, map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss',
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

  ngOnInit() {
    const id = this.#route.snapshot.paramMap.get('id');
    if (id) {
      this.animal = this.#animalsService.getAnimal(id);
    }
  }
}
