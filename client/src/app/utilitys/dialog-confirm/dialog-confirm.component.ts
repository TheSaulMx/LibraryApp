import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  books: Book[] = [];

  constructor(private dialog: MatDialogRef<DialogConfirmComponent>,
    private booksService: BooksService) { }

  ngOnInit(): void {

  }

  aceptButton(): void {
    // this.booksService.deleteBook(title)
  }

  cancelButton(status: boolean): void {
    this.dialog.close(status)
  }
}
