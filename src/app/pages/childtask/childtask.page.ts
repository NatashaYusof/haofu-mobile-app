import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { JobcardService } from 'src/app/services/jobcard.service';

@Component({
  selector: 'app-childtask',
  templateUrl: './childtask.page.html',
  styleUrls: ['./childtask.page.scss'],
})
export class ChildtaskPage implements OnInit {
  serialNo: any;
  jcTitle: any;
  jobcardId: any;
  loading: any;
  id: any;
  taskTitle: string;
  taskId: string;
  taskdetail: any;

  constructor(private http: LoginService, private router: Router, public alertController: AlertController,public loadingCtrl: LoadingController,public JobcardService: JobcardService) { }

  ngOnInit() {
    this.serialNo=this.JobcardService.serialNo;
    this.jcTitle=this.JobcardService.jcTitle;
    this.jobcardId=this.JobcardService.jobcardId;
    this.taskTitle=this.JobcardService.taskTitle;
    this.taskId=this.JobcardService.taskId;
    this.getChildTask( this.taskId);
    // console.log(this.taskId);

  }

  
  async presentLoadingWithOptions() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
   return await this.loading.present();
  }


  getChildTask(taskid){
    this.presentLoadingWithOptions();
   this.http.getChildTask(taskid).subscribe(
           response => {
           this.loading.dismiss(); 
           this.taskdetail = response.Result[0].childtask;
           console.log(this.taskdetail)
         }, error => {
           console.log("error")
         }
       );
   
   }

}
