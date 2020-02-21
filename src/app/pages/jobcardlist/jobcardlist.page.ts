import { Component, OnInit } from '@angular/core';
import { WorkorderService } from '../../../../src/app/services/workorder.service';
import { JobcardService } from '../../../../src/app/services/jobcard.service';

@Component({
  selector: 'app-jobcardlist',
  templateUrl: './jobcardlist.page.html',
  styleUrls: ['./jobcardlist.page.scss'],
})
export class JobcardlistPage implements OnInit {
  Wo: any;
  Wo1: any[]=[];
  workorderid: any;
  Wo2:any[]=[];
  task: any;

  constructor(
    public http: WorkorderService,
    public JobcardService: JobcardService,

  ) { }

  ngOnInit() {
    this.workorderid=this.JobcardService.workorderId;
    this.getViewWorkSheet(this.workorderid);
  }


  getViewWorkSheet(workorderid) {
    this.http.getViewWorkSheet(workorderid).subscribe(
      response => {
        this.Wo=response.Result;
        console.log(this.Wo)
        this.Wo.forEach((jobcard)=>{
          console.log(jobcard);
          this.task=jobcard;       
           this.task.jobcard.forEach((listJobcard)=>{
        //  console.log(listJobcard);
        //  this.Wo1=listJobcard;
         this.Wo1.push(listJobcard);
        //  console.log(this.Wo1)
         this.Wo2=listJobcard.task;
         console.log(this.Wo2)
       
          });
          console.log("sini",this.Wo1)
           }, error => {
          console.log("error")   
          });
           }, error => {
           console.log("error")
           } );
          
}
}
