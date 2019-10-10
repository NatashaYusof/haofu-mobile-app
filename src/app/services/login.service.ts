import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "https://haofu.airbusdigital.com/api/hof/mro"
  private baseURL2 = "https://smartmob.haofu.airbusdigital.com/hof-pdf/public/api/"

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name

  getUser(username, userpassword) : Observable<any> {
    console.log(username+" "+userpassword)
    return this.http.get(this.baseURL+'/user/login?username='+username+'&userpassword='+userpassword)
      .pipe(
        map( response => {
          console.log(response)
          return response
        }),
        catchError((err, caught) => {
          console.log(err)
          return throwError(err);
        })
      )
  }

  // getEmployee() : Observable<any> {
  //   return this.http.get(this.baseURL+'/user')
  //     .pipe(
  //       map( response => {
  //         console.log(response)
  //         return response;
  //       }),
  //       catchError((err, caught) => {
  //         console.log(err)
  //         return throwError(err);
  //       })
  //     )
  // }

  getJobcard(employeeid) : Observable<any>{
    return this.http.get(this.baseURL2+'get-jobcards/'+employeeid+'?remove=stopped,completed')
    .pipe(
      map( response => {
        console.log(response)
        return response
      }),
      catchError((err, caught) => {
        console.log(err)
        return throwError(err);
      })
    )
}

getToTask(jobcardid) : Observable<any> {
  return this.http.get(this.baseURL+'/task?jobcardid='+jobcardid)
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

getChildTask(taskid) : Observable<any> {
  return this.http.get(this.baseURL+'/task?taskid='+taskid)
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
