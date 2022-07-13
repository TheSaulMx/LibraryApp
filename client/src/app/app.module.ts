import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';


import { BooksService } from './services/books.service';
import { BooksListComponent } from './catalogo/books/books-list/books-list.component';
import { BookFormComponent } from './catalogo/books/book-form/book-form.component';
import { NavigationComponent } from './security/navigation/navigation.component';
import { MatDividerModule } from '@angular/material/divider';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { MatCommonModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { BooksTableComponent } from './catalogo/books/books-table/books-table.component';
import { DialogConfirmComponent } from './utilitys/dialog-confirm/dialog-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookFormComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    BooksTableComponent,
    DialogConfirmComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
  ],
  providers: [
    BooksService
  ],
  entryComponents: [DialogConfirmComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
