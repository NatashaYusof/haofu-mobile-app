import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobcardService {
 serialno:any;

 
  constructor() { }

  set setSerialNo(val: string){
    this.serialno = val;
  }
  
get getSerialNo():string{
    return this.serialno;
  }
 
}