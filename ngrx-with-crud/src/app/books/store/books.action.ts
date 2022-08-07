import { createAction, props } from '@ngrx/store';
import { Book } from './book';

//Get
export const invokeBooksAPI = createAction(
  '[Books API] invoke books Fetch API'
);

export const booksFetchAPISuccess = createAction(
  '[Books API] books Fetch API Success',
  props<{ allBooks: Book[] }>()
);

//Add
export const invokeSaveBooksAPI = createAction(
  '[Books API] invoke save books API',
  props<{ payload: Book}>()
);
export const saveBooksAPISuccess = createAction(
  '[Books API] save books API Success',
  props<{ response: Book }>()
);

//Update
export const invokeEditBooksAPI = createAction(
  '[Books API] invoke edit books API',
  props<{ payload: Book }>()
);
export const editBooksAPISuccess = createAction(
  '[Books API] edit books API Success',
  props<{ response: Book }>()
);

//Delete
export const invokeDeleteBooksAPI = createAction(
  '[Books API] invoke delete books API',
  props<{ id:number }>()
);
export const deleteBooksAPISuccess = createAction(
  '[Books API] delete books API Success',
  props<{ response: Book }>()
);