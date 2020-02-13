import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ActionSheetController,ToastController,NavController  } from '@ionic/angular';
import { JobcardService } from '../../../../src/app/services/jobcard.service';
import * as moment from 'moment';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx'
import { File } from '@ionic-native/file/ngx';
import { ImagePickerOptions,ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import {DomSanitizer} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { alertController } from '@ionic/core';
import { WorkorderService } from '../../../../src/app/services/workorder.service';
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
  changeColor = false;

  croppedImagepath = "";
  isLoading = false;
  imageSrc: any;
  userDetail: string;
  details: any;
  TimeService: any;
  loading: any;
  jobcardDetail: string;
  actionSheet:any;
  imageLists = []; 
  imageSent =[];
  cropService: any;
  imgPreview: any;
  regData: any;
  imageResponse:  any; 
  imageSave: any;
  img: any;
  presentToast: any;
  path: any;
  image: any;
  supervisor: any;
  
  
  constructor(
    // private http: LoginService,
    private router: Router,
    public alertController: AlertController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public JobcardService: JobcardService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    public imagePicker: ImagePicker,
    private crop: Crop,
    private file: File,
    private base64: Base64,
    public _DomSanitizer: DomSanitizer,
    public toastController: ToastController,
    public webview: WebView,
    public http: WorkorderService,) {   }

  ngOnInit() {
    this.serialNo=this.JobcardService.serialNo;
    this.jcTitle=this.JobcardService.jcTitle;
    this.jobcardId=this.JobcardService.jobcardId;
    this.taskTitle=this.JobcardService.taskTitle;
    this.taskId=this.JobcardService.taskId;
    this.childtaskId=this.JobcardService.childtaskId;
    console.log(this.JobcardService.childtaskId);
    this.JobcardService.imageList="";
    this.jobcardDetail = this.JobcardService.jobcardDetails;
    this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(this.currentDate)

    this.userDetail = window.localStorage.getItem('userDetail')
    this.details = JSON.parse(this.userDetail)
    console.log(this.details)
 
    this.getJobcardByEmployeeId(this.details.employee.employeeid)
    console.log(this.imageLists);


  }
  getJobcardByEmployeeId(employeeid: any): any {
  //  throw new Error("Method not implemented.");

  }

  ionViewWillEnter() {
    if (this.JobcardService.imageList != ""){
      this.image= this.JobcardService.imageList;  
      this.imageLists.push(this.image);
      console.log(this.image);
      this.imageSent.push(this.image); 
      this.JobcardService.imageList="";
    }
}



  goPause() {
  //   // console.log(taskid)
    if (this.btn_txt == "PAUSE") {
      this.btn_txt = "RESUME";
    this.changeColor = true;
      // this.JobcardService.taskId=taskid;
      // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

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
      this.changeColor = false;
  //    // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

  //     //postApi\
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

    // this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');

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
  }

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
      this.img = 'data:image/jpeg;base64,' + imageData;
      this.imageLists.push(this.img);
      this.imageSent.push(this.img);
          
      // this.photos.push(this.imageSrc);
      // this.photos.reverse();
      // this.picture = imageSrc.replace('file://', '');
      // console.log(this.picture);
      // this.picture=imageData.replace('file://', '');
    }, (err) => {
      // Handle error
    });
    
  }

  pickImage2() {

  let options = {
    outputType: 1
  };
  // this.imageResponse = [];
  this.imagePicker.getPictures(options).then((results) => {
    for (var i = 0; i < results.length; i++) {
      console.log( results[i]);
      this.imageLists.push( this.pathForImage(results[i]));
      
      this.base64.encodeFile(results[i]).then((base64File: string) => {
      // console.log(base64File);
      this.img = 'data:image/jpeg;base64,' + base64File;
      
      this.imageSent.push(this.img)
          },
           (err) => {
            console.log(err);
          });
      }
    }, (err) => { });
  }


pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    let converted = this.webview.convertFileSrc(img);
    return converted;
  }
}


  async pickImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        icon: 'images',
        handler: () => {
          this.pickImage2();
        }
      },
      {
        text: 'Use Camera',
        icon: 'camera',
        handler: () => {
          this.pickImage1(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

//   action()
// {
//   this. presentActionSheet();
// }

// presentActionSheet() {
//   this.actionSheet = this.actionSheetController.create({
//     buttons: [{
//         text: 'Edit',
//         icon: 'brush',
//         handler: () => {
//           console.log('Edit clicked');
//           this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/childtask/finding/canvas');
//         }
//           },{
//           text: 'Delete',
//           icon: 'trash',
//           handler: () => {
//             console.log('Delete clicked');
//           }
//         },  {
//           text: 'Cancel',
//           icon: 'close',
//           handler: () => {
//             console.log('Cancel clicked');
//           }
//         }]
//       }).then(actionsheet => {
//         actionsheet.present();
//       });
//     }

  goToCanvas(img,i)
  {
    this.JobcardService.imageLists=img;
    console.log(this.JobcardService.imageLists);
    this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard/task/childtask/finding/canvas');
  }

 async deleteImage(i)
  {
    let alert = alertController.create({
      header: 'Delete photo',
      message: 'Do you want to delete this photo?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: async () => {
            console.log('delete clicked');
            this.imageLists.splice(i, 1);
            let toast = await this.toastController.create({ message: "Delete photo", duration: 1500 })
            toast.present()
          }
        }
      ]
    })
    .then(alert => {
      alert.present();
    });
  }

}

