import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { SideNavItem } from '../../models/sidenav-item';

import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  subscription = new Subscription;

  sidenavItems: SideNavItem[] = [
    {
      label: 'Libros',
      icon: 'collections_bookmark',
      link: '/books'
    },
    {
      label: 'Autores',
      icon: 'person',
      link: ''
    }
  ];

  constructor(private dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private booksService: BooksService
    )
  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
  }

  close() {

  }

}
