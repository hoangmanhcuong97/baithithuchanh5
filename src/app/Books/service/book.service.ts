import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/Book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_BOOK = environment.API_LOCAL+'books';
  constructor(private http: HttpClient) {}
  listBook(): Observable<Book[]>{
    return this.http.get<Book[]>(this.API_BOOK);
  }

  deleteBook(id: number): Observable<Book>{
    return this.http.delete<Book>(this.API_BOOK + '/'+ id)
  }
  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.API_BOOK, book);
  }

  detailBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_BOOK + '/' + id);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(this.API_BOOK + '/' + id, book);
  }

}
