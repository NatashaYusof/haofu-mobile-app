import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController,ModalController } from '@ionic/angular';
import { JobcardService } from '../../../../src/app/services/jobcard.service';
import { TimeService } from '../../../../src/app/services/time.service';
import * as moment from 'moment';
import { TimedetailPage } from '../timedetail/timedetail.page';


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  serialNo: string;
  jcTitle: string;
  jobcardId: string;
  loading: any;
  id: any;
  hideMe: boolean;
  toggle: any;
  success=0;
  imej:any;
  imej1:any;
  jobcardprogresstaskcount:any;
  taskid: boolean;
  currentDate: any;
  userDetail: any;
  details: any;
  id2: any;
  alertCtrl: any;
  dataReturned: any;
  
  constructor(private http: LoginService, private router: Router, public alertController: AlertController,
    public loadingCtrl: LoadingController,public JobcardService: JobcardService,public TimeService:TimeService, public modalController: ModalController) { 

      this.imej='assets/icon/start.png';
      this.imej1='assets/icon/tick.png';
     
    }

  ngOnInit() {
    this.serialNo=this.JobcardService.serialNo;
    this.jcTitle=this.JobcardService.jcTitle;
    console.log(this.JobcardService)
    console.log(this.jcTitle)
    // console.log(this.jcTitle.jobcardprogresstaskcount)
    this.jobcardId=this.JobcardService.jobcardId;
    console.log(this.jobcardId)
    this.getToTask( this.jobcardId);

    this.userDetail = window.localStorage.getItem('userDetail')
    this.details = JSON.parse(this.userDetail)
    console.log(this.details)
 
    this.getJobcardByEmployeeId(this.details.employee.employeeid)
 
  }
  getJobcardByEmployeeId(employeeid: any): any {
  //  throw new Error("Method not implemented.");
  }

  
  async presentLoadingWithOptions() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please Wait..',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
   return await this.loading.present();
  }

  // async presentLoadingWithOptions1() {
  //   this.loading = await this.loadingCtrl.create({
  //     message: 'Start..',
  //     translucent: true,
  //     cssClass: 'custom-class custom-loading'
  //   });
  //  return await this.loading.present();
  // }

  getToTask(id){
    this.presentLoadingWithOptions();
   this.http.getToTask(id).subscribe(
           response => {
           this.loading.dismiss(); 
           this.id = response.Result[0].task;
           this.id2=response.Result;
           console.log(this.id)
           console.log(this.id2)
           
           
         }, error => {
           console.log("error")
         }
       );
   
   }

   hide() {
     if(  this.hideMe = true){
      this.hideMe = true;
     }else{
      this.hideMe = false;
     } 
       
  }
  
   gotoChildTask(id,taskid,tasktitle,jobcardDetail){
    // this.presentLoadingWithOptions1();
        this.imej;
        this.JobcardService.taskTitle=tasktitle;
        console.log(this.JobcardService.taskTitle);
        this.JobcardService.jobcardId=id;
        console.log(this.JobcardService.jobcardId);
        this.JobcardService.taskId=taskid;
        console.log(this.JobcardService.taskId);
        this.JobcardService.jobcardDetails=jobcardDetail;
        this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
        
        // //postApi
        // let data =[{
        //   taskid :this.JobcardService.taskId,
        //   employeeid :this.details.employee.employeeid,
        //   tasktimemanagementstartdatetime: this.currentDate,
        //   tasktimemanagementstartstate:1
        // }
        // ]

        // let data1 =[{
        //   taskstatus:[{"taskstatusid":1}],
        //   employeeid :this.details.employee.employeeid,
        //   taskid :this.JobcardService.taskId,
        // }
        // ]
        // console.log(data)
        // console.log(data1)
        // this.TimeService.postStart(data).subscribe((response) => {
        //   console.log(response)
        //   this.TimeService.postStart1(data1).subscribe((response) => {
        //     this.loading.dismiss(); 
        //     console.log(response)
          this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/'+id+'/childtask/'+taskid);
  
        //   });
        // });
   }
  
  async goTime(taskid) {
    this.JobcardService.taskId=taskid;
    const modal = await this.modalController.create({
      component: TimedetailPage,
      componentProps: {
        
        "paramTaskId": taskid,
        // "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

  }
 

