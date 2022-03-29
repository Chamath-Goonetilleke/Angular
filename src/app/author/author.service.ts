import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  getAuthors() {
    return ['author1', 'author2', "author3"];
  }
}