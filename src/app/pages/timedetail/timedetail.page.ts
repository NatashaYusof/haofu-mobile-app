import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { JobcardService } from '../../../../src/app/services/jobcard.service';
import { TimeService } from '../../../../src/app/services/time.service';

@Component({
  selector: 'app-timedetail',
  templateUrl: './timedetail.page.html',
  styleUrls: ['./timedetail.page.scss'],
})
export class TimedetailPage implements OnInit {
  http: any;
  loading: any;
  details: any;
  taskId: any;
  listTimeDetail: any;
  timeDetails: any;
  finish: boolean
  newarr:any=[];

  constructor(public modalController: ModalController, public JobcardService: JobcardService, private navParams: NavParams,public TimeService:TimeService ) { }

  ngOnInit() {
    this.taskId =  this.navParams.get('paramTaskId')
   
   this.getTimeDetails(this.taskId);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  getTimeDetails(taskid){
   this.TimeService.getTimeDetails(taskid).subscribe(
           response => {
          //  this.details=response.Result;
          //  console.log(this.details.reverse())   
          //  for (var i = 0; i < (this.details.reverse().length); i++) {
          //    console.log(i)
          //   if(i === this.details.reverse().length-1  ){
          //     console.log(i)
          //    this.finish=true
          //   }else{
          //     this.finish=false
          //   }
          this.details = response.Result;
          console.log(this.details)
          for (var i = 0; i < ( this.details.length); i++) {
           this.newarr.push(this.details[i]);
       }
       console.log(this.newarr)
       for (var i = 0; i < (this.newarr.length); i++) {
          if(i === this.newarr.length-1  ){
            this.newarr[i].newtaskstatus = true
       }
       else{
        this.newarr[i].newtaskstatus = false
       }
       console.log(this.newarr)
       }
        
             
          //  this.details.reverse().forEach(timeDetail => {
          //   this.timeDetails=timeDetail;
          //   console.log(this.timeDetails)
          //   // this.timeDetails.timeDetail.forEach((List)=>{
          //   //   console.log(List.Detail)
          // });

          
        }, error => {
       console.log("error")   
       });
     
   }
}
