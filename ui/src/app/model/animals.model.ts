export const AnimalTypes = [
  'Mammal',
  'Bird',
  'Fish',
  'Reptile',
  'Insect',
] as const;
export type AnimalType = (typeof AnimalTypes)[number];
export const AnimalTypeColors: Record<AnimalType, string> = {
  Mammal: 'bg-green-200',
  Bird: 'bg-teal-200',
  Fish: 'bg-blue-200',
  Reptile: 'bg-purple-200',
  Insect: 'bg-orange-200',
};

export interface Animal {
  id: string;
  name: string;
  weight: number;
  type: AnimalType;
}

export type CreateAnimalRq = Omit<Animal, 'id'>;
