import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Book } from '../store/book';
import { selectBookById } from '../store/books.selector';
import { switchMap } from 'rxjs';
import { invokeEditBooksAPI } from '../store/books.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/appstate';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private appStore: Store<Appstate>
  ) {}
  bookForm: Book = {
    id: 0,
    author: '',
    title: '',
    cost: 0,
  };
  ngOnInit(): void {
    let fetchFormData$ = this.route.paramMap.pipe(
      switchMap((param) => {
        var id = Number(param.get('id'));
        return this.store.pipe(select(selectBookById(id)));
      })
    );
    fetchFormData$.subscribe((data) => {
      if (data) {
        this.bookForm = { ...data };
      } else {
        this.router.navigate(['/']);
      }
    });
  }
  update() {
    this.store.dispatch(invokeEditBooksAPI({ payload: { ...this.bookForm } }));
    let appStete$ = this.appStore.pipe(select(selectAppState));
    appStete$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }
}
