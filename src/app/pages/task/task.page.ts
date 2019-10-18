import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { JobcardService } from 'src/app/services/jobcard.service';

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

  constructor(private http: LoginService, private router: Router, public alertController: AlertController,public loadingCtrl: LoadingController,public JobcardService: JobcardService) { }

  ngOnInit() {
    this.serialNo=this.JobcardService.serialNo;
    this.jcTitle=this.JobcardService.jcTitle;
    this.jobcardId=this.JobcardService.jobcardId;
    this.getToTask( this.jobcardId);
  }

  
  async presentLoadingWithOptions() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
   return await this.loading.present();
  }

  getToTask(id){
    this.presentLoadingWithOptions();
   this.http.getToTask(id).subscribe(
           response => {
           this.loading.dismiss(); 
           this.id = response.Result;
           console.log(this.id);
           
         }, error => {
           console.log("error")
         }
       );
   
   }

   hide() {
      this.hideMe = true;
  
   
  }
  
   gotoChildTask(id,taskid,tasktitle){
    this.JobcardService.taskTitle=tasktitle;
    console.log(this.JobcardService.taskTitle);
    this.JobcardService.jobcardId=id;
    console.log(this.JobcardService.jobcardId);
    this.JobcardService.taskId=taskid;
    console.log(this.JobcardService.taskId);
    this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/'+id+'/childtask/'+taskid);
   }
  }
 

