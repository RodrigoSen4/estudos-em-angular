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

  remove(id: number) {
    console.log(id);
    return this.http.delete<Animal>(`${this.urlAnimals}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.urlAnimals);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.urlAnimals}/${id}`);
  }
}
