import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books-services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  constructor(private booksSerevice: BooksService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private window: MatDialogRef<BookFormComponent>)
    {

     }

  book: Book = {
    title: '',
    cover: '',
    synopsis: '',
    autor: '',
    category: '',
    editorial: ''
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['title']) {
      this.booksSerevice.getBook(params['title']).subscribe({
        next: (res) => {
          console.log(res);
          this.book!= res;
        }
      })
    }
  }

  saveBook(){
    this.booksSerevice.saveBook(this.book).subscribe({
      next: (data) => {
        this.closeWindow(true);
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.info('Libro guardado!')
      }
    })
  }

  closeWindow(status: boolean) {
    this.window.close(status)
  }
}
