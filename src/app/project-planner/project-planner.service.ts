import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProject } from './Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectPlannerService {
  private _projectUrl = 'api/project/project-list.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this._projectUrl).pipe(
      tap((data) => console.log('--->', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
