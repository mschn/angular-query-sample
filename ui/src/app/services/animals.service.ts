import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import {
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

  getAnimal = (id: Signal<string>) =>
    injectQuery(() => ({
      queryKey: ['animals', id()],
      queryFn: () =>
        lastValueFrom(this.#http.get<Animal>(`${BASE_URL}/animals/${id()}`)),
    }));

  createAnimal = () =>
    injectMutation<Object, Error & { error: string[] }, CreateAnimalRq>(() => ({
      mutationFn: (request: CreateAnimalRq) =>
        lastValueFrom(this.#http.put(`${BASE_URL}/animals`, request)),
      onSuccess: () => {
        this.#queryClient.invalidateQueries({ queryKey: ['animals'] });
      },
    }));
}
