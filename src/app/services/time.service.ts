import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private baseURL = "https://haofu.airbusdigital.com/api/hof/mro/task-time-management"
  private basePath ="https://haofu.airbusdigital.com/api/hof/mro/task"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

   // Handle API errors
   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
//postStart use for start,pause,resume and finish
//postStart for tasktimemanagement api
//postStart1 for task_status api
  postStart(item): Observable<any>{
    console.log(item)
    return this.http.post(this.baseURL, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postStart1(item1): Observable<any>{
    console.log(item1)
    return this.http.post(this.basePath, JSON.stringify(item1), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  
  }

  getTimeDetails(taskid) : Observable<any> {
    return this.http.get(this.baseURL+'?taskid='+taskid)
      .pipe(
        map( response => {
          console.log(response)
          return response;
        }),
        catchError((err, caught) => {
          console.log(err)
          return throwError(err);
        })
      )
  }
}


