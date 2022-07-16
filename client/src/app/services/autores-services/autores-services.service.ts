import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Autor } from 'src/app/models/autor';
import { Respuesta } from '../../models/res';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/api';

  getAutores(): Observable<Respuesta<Autor[]>> {

    return this.http.get<Respuesta<Autor[]>>(`${this.API_URL}/autores`);

  }

}
