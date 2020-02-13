import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { JobcardService } from '../../../../src/app/services/jobcard.service';
import { TimeService } from '../../../../src/app/services/time.service';
import * as moment from 'moment';

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
  id2: any;
  taskTitle: string;
  taskId: string;
  taskdetail: any;
  // test: String = ''; 
  btn_txt = 'PAUSE';
  hideMe:boolean = false;
  count= 1;
  currentDate: any;
  userDetail: string;
  details: any;
  jobcardDetail:any;

  constructor(private http: LoginService, private router: Router, public alertController: AlertController, 
    public loadingCtrl: LoadingController, public JobcardService: JobcardService,public TimeService:TimeService) {

      this.count=+1;
      this.count++;
     }

  ngOnInit() {
    this.serialNo = this.JobcardService.serialNo;
    this.jcTitle = this.JobcardService.jcTitle;
    this.jobcardId = this.JobcardService.jobcardId;
    this.taskTitle = this.JobcardService.taskTitle;
    this.taskId = this.JobcardService.taskId;
    this.jobcardDetail = this.JobcardService.jobcardDetails;
    console.log(this.jobcardDetail);
    this.getChildTask(this.taskId);
    // console.log(this.taskId);
  
    this.userDetail = window.localStorage.getItem('userDetail')
    this.details = JSON.parse(this.userDetail)
    console.log(this.details)
 
    this.getJobcardByEmployeeId(this.details.employee.employeeid)
 
  }
  getJobcardByEmployeeId(employeeid: any): any {
  //  throw new Error("Method not implemented.");

  }


  getToTask(id){
   this.http.getToTask(id).subscribe(
           response => {
           this.loading.dismiss(); 
           this.id2=response.Result;
           console.log(this.id2)
    
         }, error => {
           console.log("error")
         }
       );
   
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
    this.JobcardService.childtaskId = taskid;
    console.log(this.JobcardService.childtaskId);
    this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid + '/finding');
  }

  goToManual(id, taskid) {
    this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/' + id + '/childtask/' + taskid + '/manual');
  }

  goPause() {
    // console.log(taskid)
    if (this.btn_txt == "PAUSE") {
      this.btn_txt = "RESUME";
      // this.JobcardService.taskId=taskid;
      this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

        //postApi
        let data =[{
          taskid :this.JobcardService.taskId,
          employeeid :this.details.employee.employeeid,
          tasktimemanagementenddatetime: this.currentDate,
          tasktimemanagementendstate:2
        }
        ]

        let data1 =[{
          taskstatus:[{"taskstatusid":2}],
          employeeid :this.details.employee.employeeid,
          taskid :this.JobcardService.taskId,
        }
        ]
        console.log(data)
        console.log(data1)
        this.TimeService.postStart(data).subscribe((response) => {
          console.log(response)
          this.TimeService.postStart1(data1).subscribe((response) => {
            this.loading.dismiss(); 
            console.log(response)
        
          });
        });
  //     // document.body.style.backgroundColor ='#b8bdc2';


    } else {
      this.btn_txt = "PAUSE";

      this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

      //postApi
      let data =[{
        taskid :this.JobcardService.taskId,
        employeeid :this.details.employee.employeeid,
        tasktimemanagementstartdatetime: this.currentDate,
        tasktimemanagementstartstate:3
      }
      ]

      let data1 =[{
        taskstatus:[{"taskstatusid":3}],
        employeeid :this.details.employee.employeeid,
        taskid :this.JobcardService.taskId,
      }
      ]
      console.log(data)
      console.log(data1)
      this.TimeService.postStart(data).subscribe((response) => {
        console.log(response)
        this.TimeService.postStart1(data1).subscribe((response) => {
          this.loading.dismiss(); 
          console.log(response)
      
        });
      });
  //     // document.body.style.backgroundColor = 'transparent';
    }
  }

  goFinish(){

    this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

        //postApi
        let data =[{
          taskid :this.JobcardService.taskId,
          employeeid :this.details.employee.employeeid,
          tasktimemanagementenddatetime: this.currentDate,
          tasktimemanagementendstate:4

        }
        ]
  
        let data1 =[{
          taskstatus:[{"taskstatusid":4}],
          employeeid :this.details.employee.employeeid,
          taskid :this.JobcardService.taskId,
        }
        ]
        console.log(data)
        console.log(data1)
        this.TimeService.postStart(data).subscribe((response) => {
          console.log(response)
          this.TimeService.postStart1(data1).subscribe((response) => {
            this.loading.dismiss(); 
            console.log(response)
        
          });
        });
        // this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/'+id+'/childtask/'+taskid);
  }
  hide() { 
    this.hideMe = !this.hideMe;
    }
}
