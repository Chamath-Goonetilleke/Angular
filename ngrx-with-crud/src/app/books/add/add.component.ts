import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { Book } from '../store/book';
import { invokeSaveBooksAPI } from './../store/books.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private store: Store, private appStore:Store<Appstate>, private router:Router) {}

  bookForm: Book = {
    id: 0,
    author: '',
    title: '',
    cost: 0,
  };

  ngOnInit(): void {}
  save() {
    this.store.dispatch(invokeSaveBooksAPI({ payload: { ...this.bookForm } }));
    let appStete$ = this.appStore.pipe(select(selectAppState));
    appStete$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/'])
      }
    })
  }
}
