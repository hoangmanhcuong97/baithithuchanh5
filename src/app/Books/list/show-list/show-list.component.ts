import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from "../../model/Book";
import {BookService} from "../../service/book.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {DialogComponent} from "../../dialog/dialog/dialog.component";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author','edit', 'delete'];
  dataSource: any;
  books: Book[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  constructor(private bookSv: BookService,
              private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getListBook();
  }
  getListBook(){
    this.bookSv.listBook().subscribe(data =>{
      this.books = data;
      this.dataSource = new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator = this.paginator;
    })
  }
  delete(id) {
    this.bookSv.deleteBook(id).subscribe(() => {
      this.getListBook();
    })
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }


}
