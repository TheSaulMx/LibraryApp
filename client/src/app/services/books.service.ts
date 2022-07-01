import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { Respuesta } from '../models/res';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  API_URL= 'http://localhost:3000/api'

  getBooks(): Observable<Respuesta<Book[]>>{
    return this.http.get<Respuesta<Book[]>>(`${this.API_URL}/books`);
  }

  getBook(title: string){
    return this.http.get(`${this.API_URL}/books/${title}`);
  }

  saveBook(book: Book): Observable<any> {
    return this.http.post(`${this.API_URL}/books`, book);
  }

  deleteBook(title: string) {
    return this.http.delete(`${this.API_URL}/books/${title}`);
  }

  updateBook(title: string, libroActualizado: Book): Observable<any> {
    return this.http.put(`${this.API_URL}/books/${title}`, libroActualizado);
  }
}
