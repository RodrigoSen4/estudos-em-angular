import { Injectable } from '@angular/core';
import { Animal } from '../Interfaces/Animal';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private urlAnimals = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  remove(animals: Animal[], animal: Animal): Animal[] {
    return animals.filter((ele) => animal.name !== ele.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.urlAnimals);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.urlAnimals}/${id}`);
  }
}
