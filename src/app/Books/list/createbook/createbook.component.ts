import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/Book";

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})
export class CreatebookComponent implements OnInit {
  form: any = {};
  books: Book;
  status = 'Please fill in the form to create book';

  constructor(private booksv: BookService) { }

  ngOnInit(): void {
  }
  ngCreate() {
    // @ts-ignore
    this.books = new Book(
        this.form.title,
        this.form.author,
        this.form.description
    );
    this.booksv.createBook(this.books).subscribe(data => {
        this.status = 'Create success!';
    });
  }
}
