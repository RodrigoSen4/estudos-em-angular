import { Injectable } from '@angular/core';
import { Animal } from '../Interfaces/Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(animals: Animal[], animal: Animal): Animal[] {
    return animals.filter((ele) => animal.name !== ele.name);
  }
}
