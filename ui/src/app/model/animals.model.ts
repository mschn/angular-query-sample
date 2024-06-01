export interface Animal {
  id: string;
  name: string;
}

export type CreateAnimalRq = Omit<Animal, 'id'>;
