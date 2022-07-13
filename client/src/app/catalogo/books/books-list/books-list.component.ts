import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  books: any = [];

  ngOnInit(): void {
   this.getBooks();
  }

  getBooks(){
    try {
      this.booksService.getBooks().subscribe({
        next: (data) => {
            this.books = data.entity;
          console.log(data)

        },
        error: (err) => console.log(err),
        complete: () => console.info('Get Books Complete!')
      });
    } catch (error) {
      console.log(error)
    }
  }

  editBook(title: string){
    console.log(title);
  }

}
