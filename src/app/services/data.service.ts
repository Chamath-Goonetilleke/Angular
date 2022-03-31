import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';
import { Inject } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {
    this.url = url;
  }

  getAll() {
    return this.http
      .get(this.url)
      .pipe(catchError(this.handleError));
  }
  create(resource: any) {
    
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }
  update(id: any, resource: any) {
    return this.http
      .patch(this.url + '/' + id, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }
  delete(id: number) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(() => new BadRequestError(error));
    }
    if (error.status === 404) {
      return throwError(() => new NotFoundError(error));
    }
    return throwError(() => new AppError(error));
  }
}
