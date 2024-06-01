import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  QueryClient,
  injectMutation,
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { Animal, CreateAnimalRq } from '../model/animals.model';

const BASE_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class AnimalsService {
  #http = inject(HttpClient);
  #queryClient = injectQueryClient();

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
        lastValueFrom(this.#http.get<Animal>(`${BASE_URL}/animals/${id}`)),
    }));

  createAnimal = () =>
    injectMutation(() => ({
      mutationFn: (request: CreateAnimalRq) =>
        lastValueFrom(this.#http.post(`${BASE_URL}/animals`, request)),
      onSuccess: () => {
        this.#queryClient.invalidateQueries({ queryKey: ['animals'] });
      },
    }));
}
