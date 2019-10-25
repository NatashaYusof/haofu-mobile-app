import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { JobcardService } from '../../../../src/app/services/jobcard.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.page.html',
  styleUrls: ['./jobcard.page.scss'],
})
export class JobcardPage implements OnInit {
  userID: any;
  jobcard: any;
  userDetail: any;
  listJCard :any;
  employeeid: any;
  JCard: any;
  serialno: string;
  serialNo: any;

  constructor(private http: LoginService, private router: Router, public alertController: AlertController,public JobcardService: JobcardService) { }

  ngOnInit() {

    // console.log( window.localStorage.getItem('serialno'))
    // this.serialno = window.localStorage.getItem('serialno')
    // this.serialno = JSON.parse(this.serialno)
    // console.log(this.serialno)

    this.userDetail =JSON.parse(window.localStorage.getItem('userDetail')) 
    console.log(this.userDetail.employeeid)
   // this.getJobcardByEmployeeId(this.userDetail.employeeid)

  this.serialNo=this.JobcardService.serialNo;
  console.log(this.serialNo);
  }


  goToTaks(id,jctitle){
    this.JobcardService.jcTitle=jctitle;
    console.log(this.JobcardService.jcTitle);
    this.JobcardService.jobcardId=id;
    console.log(this.JobcardService.jobcardId);
    this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/'+id);
  }

}

