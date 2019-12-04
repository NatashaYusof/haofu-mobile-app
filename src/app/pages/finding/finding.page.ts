import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { JobcardService } from '../../../../src/app/services/jobcard.service';
import * as moment from 'moment';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx'
import { File } from '@ionic-native/file/ngx';
// import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-finding',
  templateUrl: './finding.page.html',
  styleUrls: ['./finding.page.scss'],
})
export class FindingPage implements OnInit {
  serialNo: string;
  jcTitle: string;
  jobcardId: string;
  taskTitle: string;
  taskId: string;
  currentDate: any;
  formattedDate: string;
  childtaskId: string;
  btn_txt = 'PAUSE';
  photos = [];

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  crop: any;
  picture: string;
  imageSrc: any;
  userDetail: string;
  details: any;
  TimeService: any;
  loading: any;
  jobcardDetail: string;
  // imageSrc: any;

  constructor(private http: LoginService, private router: Router, public alertController: AlertController,public loadingCtrl: LoadingController,
    public JobcardService: JobcardService,private camera: Camera,public actionSheetController: ActionSheetController,
    private file: File) { }

  ngOnInit() {
    this.serialNo=this.JobcardService.serialNo;
    this.jcTitle=this.JobcardService.jcTitle;
    this.jobcardId=this.JobcardService.jobcardId;
    this.taskTitle=this.JobcardService.taskTitle;
    this.taskId=this.JobcardService.taskId;
    this.childtaskId=this.JobcardService.childtaskId;
    console.log(this.JobcardService.childtaskId);
    this.jobcardDetail = this.JobcardService.jobcardDetails;
    this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(this.currentDate)

    this.userDetail = window.localStorage.getItem('userDetail')
    this.details = JSON.parse(this.userDetail)
    console.log(this.details)
 
    this.getJobcardByEmployeeId(this.details.employee.employeeid)
 
  }
  getJobcardByEmployeeId(employeeid: any): any {
  //  throw new Error("Method not implemented.");

  }

  // goPause() {
  //   // console.log(taskid)
  //   if (this.btn_txt == "PAUSE") {
  //     this.btn_txt = "RESUME";
  //     // this.JobcardService.taskId=taskid;
  //     // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

  //       //postApi
  //       let data =[{
  //         taskid :this.JobcardService.taskId,
  //         employeeid :this.details.employee.employeeid,
  //         tasktimemanagementenddatetime: this.currentDate,
  //         tasktimemanagementendstate:2
  //       }
  //       ]

  //       let data1 =[{
  //         taskstatus:[{"taskstatusid":2}],
  //         employeeid :this.details.employee.employeeid,
  //         taskid :this.JobcardService.taskId,
  //       }
  //       ]
  //       console.log(data)
  //       console.log(data1)
  //       this.TimeService.postStart(data).subscribe((response) => {
  //         console.log(response)
  //         this.TimeService.postStart1(data1).subscribe((response) => {
  //           this.loading.dismiss(); 
  //           console.log(response)
        
  //         });
  //       });
  //     // document.body.style.backgroundColor ='#b8bdc2';


  //   } else {
  //     this.btn_txt = "PAUSE";

  //    // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

  //     //postApi\
  //     let data =[{
  //       taskid :this.JobcardService.taskId,
  //       employeeid :this.details.employee.employeeid,
  //       tasktimemanagementstartdatetime: this.currentDate,
  //       tasktimemanagementstartstate:3
  //     }
  //     ]

  //     let data1 =[{
  //       taskstatus:[{"taskstatusid":3}],
  //       employeeid :this.details.employee.employeeid,
  //       taskid :this.JobcardService.taskId,
  //     }
  //     ]
  //     console.log(data)
  //     console.log(data1)
  //     this.TimeService.postStart(data).subscribe((response) => {
  //       console.log(response)
  //       this.TimeService.postStart1(data1).subscribe((response) => {
  //         this.loading.dismiss(); 
  //         console.log(response)
      
  //       });
  //     });
  //     // document.body.style.backgroundColor = 'transparent';
  //   }
  // }
  
  // goFinish(){

  //   // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

  //       //postApi
  //       let data =[{
  //         taskid :this.JobcardService.taskId,
  //         employeeid :this.details.employee.employeeid,
  //         tasktimemanagementenddatetime: this.currentDate,
  //         tasktimemanagementendstate:5

  //       }
  //       ]
  
  //       let data1 =[{
  //         taskstatus:[{"taskstatusid":5}],
  //         employeeid :this.details.employee.employeeid,
  //         taskid :this.JobcardService.taskId,
  //       }
  //       ]
  //       console.log(data)
  //       console.log(data1)
  //       this.TimeService.postStart(data).subscribe((response) => {
  //         console.log(response)
  //         this.TimeService.postStart1(data1).subscribe((response) => {
  //           this.loading.dismiss(); 
  //           console.log(response)
        
  //         });
  //       });
  // }

  pickImage1(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType:  sourceType,
      // destinationType: this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      // quality: 100,
      // destinationType: this.camera.DestinationType.FILE_URI,
      // encodingType: this.camera.EncodingType.JPEG,
      // mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imageSrc = 'data:image/jpeg;base64,' + imageData;
      // this.photos.push(this.imageSrc);
      // this.photos.reverse();
      // this.picture = imageSrc.replace('file://', '');
      // console.log(this.picture);
      // this.picture=imageData.replace('file://', '');
    }, (err) => {
      // Handle error
    });
  }
  
  async pickImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage1(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage1(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  goToCanvas()
  {
    this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/childtask/finding/canvas');
  }
}