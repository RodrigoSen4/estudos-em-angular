import { Component } from '@angular/core';

import { Animal } from 'src/app/Interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 22 },
    { name: 'Tom', type: 'Cat', age: 23 },
    { name: 'Frida', type: 'Dog', age: 23 },
    { name: 'Bob', type: 'Horse', age: 23 },
  ];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos!`;
  }
}
