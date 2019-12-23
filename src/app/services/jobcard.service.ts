import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Base64 } from '@ionic-native/base64/ngx';

@Injectable({
  providedIn: 'root'
})
export class JobcardService {

  serialno: any;
  jctitle: string;
  id: string;
  tasktitle: string;
  taskid: string;
  childtaskid: string;
  jobcardDetail:any;
  img: any;
 
  constructor(private http: HttpClient) {}


  get serialNo():string{
    return this.serialno;
  }

  set serialNo(val: string){
    this.serialno =val;
  }

  get jcTitle():string{
    return this.jctitle;
  }

  set jcTitle(val: string){
    this.jctitle =val;
  }

  get jobcardId():string{
    return this.id;
  }

  set jobcardId(val: string){
    this.id =val;
  }
   
  get taskTitle():string{
    return this.tasktitle;
  }

  set taskTitle(val: string){
    this.tasktitle =val;
  }
   
  get taskId():string{
    return this.taskid;
  }

  set taskId(val: string){
    this.taskid =val;
  }

  get childtaskId():string{
    return this.childtaskid;
  }

  set childtaskId(val: string){
    this.childtaskid =val;
  }

  get jobcardDetails():string{
    return this.jobcardDetail;
  }

  set jobcardDetails(val: string){
    this.jobcardDetail =val;
  }

  get imageLists():any{
    return this.img;
  }

  set imageLists(val: any){
    this.img =val;
  }
}