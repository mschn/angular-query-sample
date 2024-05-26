import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { Animal } from '../model/animals.model';

const BASE_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class AnimalsService {
  #http = inject(HttpClient);

  getAnimals = () =>
    injectQuery(() => ({
      queryKey: ['animals'],
      queryFn: () =>
        lastValueFrom(this.#http.get<Animal[]>(`${BASE_URL}/animals`)),
    }));

  getAnimal = (id: string) =>
    injectQuery(() => ({
      queryKey: ['animals', id],
      queryFn: () =>
        lastValueFrom(this.#http.get<Animal>(`${BASE_URL}/animal/${id}`)),
    }));
}
