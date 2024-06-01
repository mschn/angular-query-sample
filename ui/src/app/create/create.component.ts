import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CreateAnimalRq } from '../model/animals.model';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [FormsModule, ReactiveFormsModule],
})
export class CreateComponent {
  #animalService = inject(AnimalsService);
  createAnimal = this.#animalService.createAnimal();

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
  });

  onSubmit() {
    const animalRq: CreateAnimalRq = {
      name: this.form.value.name ?? '',
    };

    this.createAnimal.mutate(animalRq);
  }
}
