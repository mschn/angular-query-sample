import { z } from "zod";

export const Animal = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  weight: z.number().gt(0, { message: "Weight must be positive" }),
  type: z.enum(["Mammal", "Fish", "Bird", "Reptile", "Insect"]),
});

export const animals = [
  { id: "1", name: "Cat", weight: 3, type: "Mammal" },
  { id: "2", name: "Shark", weight: 120, type: "Fish" },
  { id: "3", name: "Eagle", weight: 6, type: "Bird" },
  { id: "4", name: "Dog", weight: 10, type: "Mammal" },
  { id: "5", name: "Snake", weight: 7, type: "Reptile" },
  { id: "6", name: "Hamster", weight: 0.5, type: "Mammal" },
  { id: "7", name: "Wolf", weight: 27, type: "Mammal" },
  { id: "8", name: "Ant", weight: 0.000005, type: "Insect" },
];
