import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AnimalType,
  AnimalTypes,
  CreateAnimalRq,
} from '../model/animals.model';
import { AnimalsService } from '../services/animals.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class CreateComponent {
  #router = inject(Router);
  #animalService = inject(AnimalsService);
  createAnimal = this.#animalService.createAnimal();
  AnimalTypes = AnimalTypes;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    weight: new FormControl(0, Validators.required),
    type: new FormControl<AnimalType>('Mammal', Validators.required),
  });

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const formValue = this.form.value;
    const animalRq: CreateAnimalRq = {
      name: formValue.name ?? '',
      weight: formValue.weight ?? 0,
      type: formValue.type ?? 'Mammal',
    };

    this.createAnimal.mutate(animalRq, {
      onSuccess: () => {
        this.#router.navigateByUrl('/animals');
      },
    });
  }
}
