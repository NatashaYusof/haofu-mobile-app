import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkorderService {

  private baseURL = "https://haofu.airbusdigital.com/api/hof/mro"
  private baseURL2 = "https://smartmob.haofu.airbusdigital.com/haofu-api/api/v1/radomes"


  constructor(
    private http: HttpClient
    
    ) { }

    getTechnician() : Observable<any> {
      return this.http.get(this.baseURL+'/employee?employeejobtitle=Technician')
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
    
    getSupervisor() : Observable<any> {
      return this.http.get(this.baseURL+'/employee?employeejobtitle=supervisor')
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

    getEngineer() : Observable<any> {
      return this.http.get(this.baseURL+'/employee?employeejobtitle=engineer')
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

//total in workshop
    getTotal() : Observable<any> {
      return this.http.get(this.baseURL+'/workorder')
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

    getWorkOrder() : Observable<any> {
      return this.http.get(this.baseURL+'/workorder?row=100&join=0')
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

    getWorkSheet() : Observable<any> {
      return this.http.get(this.baseURL+'/worksheet?row=100&join=0')
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

    //get delayed and closed
    getClosed(): Observable<any> {
      return this.http.get(this.baseURL2+'/closed')
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

    getDelayed(): Observable<any> {
      return this.http.get(this.baseURL2+'/delayed')
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
