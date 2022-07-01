import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { DialogConfirmComponent } from 'src/app/utilitys/dialog-confirm/dialog-confirm.component';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit {

  confirm = new DialogConfirmComponent;

  sub = new Subscription;

  displayedColumns: string[] = ['ID', 'Titulo', 'Autor', 'Opciones'];

  public books: any = [];

  constructor(private booksService: BooksService, private dialog: MatDialog) {}

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

  openDialogDelete(title: string): void {
    console.log(title);
    this.dialog.open(DialogConfirmComponent)
        if (this.confirm.aceptButton()) {
          this.booksService.deleteBook(title).subscribe({
          next: (data) => {
          this.getBooksT();
          },
          error: (err) => {
          console.error(err)
            },
          complete: () => console.info('delete complete')
          })
        }
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

