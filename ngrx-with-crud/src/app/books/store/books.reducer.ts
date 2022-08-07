import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import {
  booksFetchAPISuccess,
  deleteBooksAPISuccess,
  editBooksAPISuccess,
  saveBooksAPISuccess,
} from './books.action';

export const initialState: ReadonlyArray<Book> = [];
export const bookReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (state, { allBooks }) => {
    return allBooks;
  }),
  on(saveBooksAPISuccess, (state, { response }) => {
    let newState = [...state];
    newState.push(response);
    return newState;
  }),
  on(editBooksAPISuccess, (state, { response }) => {
    let newState = [...state];
    newState = newState.filter((s) => s.id !== response.id);
    newState.push(response);
    return newState;
  }),
  on(deleteBooksAPISuccess, (state, { response }) => {
    let newState = [...state];
    newState = newState.filter((s) => s.id !== response.id);
    return newState;
  })
);
