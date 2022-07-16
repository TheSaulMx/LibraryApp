import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/books-services/books.service';
import { DialogConfirmComponent } from 'src/app/utilitys/dialog-confirm/dialog-confirm.component';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit {

  sub = new Subscription;

  displayedColumns: string[] = ['ID', 'Titulo', 'Autor', 'Opciones'];

  public books: any = [];

  constructor(private booksService: BooksService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getBooksT();
  }

  getBooksT() {
    this.sub.add(
      this.booksService.getBooks().subscribe({
        next: (data) => {
          this.books = data.entity;
        },
        error: (err) => console.log(err),
        complete: () => console.info('Get Books Complete!')
      })
    )
  }

  openDialog(title?: string) {
    console.log(title);
    this.sub.add(
      this.dialog.open(BookFormComponent).afterClosed().subscribe({
        next: (data) => {
          this.getBooksT();
        }
      })
    )

  }

  confirmDialog(title: string, status: boolean): void {
    console.log(title);
    this.dialog.open(DialogConfirmComponent).afterClosed().subscribe({
      next: (data) => {
        if (data = true) {
          console.log(data);
          this.booksService.deleteBook(title);
        } else {

        }
      }
    });


  }

}

// this.booksService.deleteBook(title).subscribe({
//   next: (data) => {
//      this.getBooksT();
//   },
//   error: (err) => {
//     console.error(err)
//   },
//   complete: () => console.info('delete complete')
// })

