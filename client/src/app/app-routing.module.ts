import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BooksTableComponent } from './components/books-table/books-table.component';

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
      path: 'books-table',
      component: BooksTableComponent
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
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
