import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { JobcardService } from '../../../../src/app/services/jobcard.service';

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
  // test: String = ''; 
  btn_txt = 'PAUSE';
  hideMe: boolean;
  count= 1;

  constructor(private http: LoginService, private router: Router, public alertController: AlertController, 
    public loadingCtrl: LoadingController, public JobcardService: JobcardService) {

      this.count=+1;
      this.count++;
     }

  ngOnInit() {
    this.serialNo = this.JobcardService.serialNo;
    this.jcTitle = this.JobcardService.jcTitle;
    this.jobcardId = this.JobcardService.jobcardId;
    this.taskTitle = this.JobcardService.taskTitle;
    this.taskId = this.JobcardService.taskId;
    console.log(this.taskId);
    this.getChildTask(this.taskId);
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


  getChildTask(taskid) {
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

  goToFinding(id, taskid) {
    // this.JobcardService.taskTitle=tasktitle;
    // console.log(this.JobcardService.taskTitle);
    // this.JobcardService.jobcardId=id;
    // console.log(this.JobcardService.jobcardId);
    this.JobcardService.childtaskId = taskid;
    console.log(this.JobcardService.childtaskId);
    this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid + '/finding');
  }

  goToManual(id, taskid) {
    this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid + '/manual');
  }

  goPause() {
    if (this.btn_txt == "PAUSE") {
      this.btn_txt = "RESUME";
      // document.body.style.backgroundColor = "red";
    } else {
      this.btn_txt = "PAUSE";
    }
  }

  hide() {
    //  if(  this.hideMe = true){
      this.hideMe = true;
    //  }else{
    //   this.hideMe = false;
    //  }
       
  }
}
