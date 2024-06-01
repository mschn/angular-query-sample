import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalComponent } from './animal/animal.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
  {
    path: 'animals',
    component: AnimalsComponent,
  },
  {
    path: 'animals/:id',
    component: AnimalComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
