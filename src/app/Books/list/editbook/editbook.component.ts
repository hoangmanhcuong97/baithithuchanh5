import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/Book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent implements OnInit {
  book: Book;
  status = 'Form Edit Book!!!';
  constructor(private atRouter: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(ctgId => {
      const id = +ctgId.get('id');
      this.bookService.detailBook(id).subscribe(bks => {
        this.book = bks;
      });
    });
  }
  ngUpdate() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(data => {
        this.status = 'Update Success!';
    });
  }

}
