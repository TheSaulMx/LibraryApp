import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './catalogo/books/books-list/books-list.component';
import { BookFormComponent } from './catalogo/books/book-form/book-form.component';
import { NavigationComponent } from './security/navigation/navigation.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { BooksTableComponent } from './catalogo/books/books-table/books-table.component';
import { AutoresListComponent } from './catalogo/autores/autores-list/autores-list.component';

const routes: Routes = [
{
  path:'',
  component: NavigationComponent,
  children:[
    {
      path: '',
      redirectTo: '/books',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path:'books',
      component: BooksListComponent
    },
    {
      path: 'books/add',
      component: BookFormComponent
    },
    {
      path: 'books/edit/:title',
      component: BookFormComponent
    },
    {
      path: 'books-table',
      component: BooksTableComponent
    },

    {
      path: 'autores',
      component: AutoresListComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
