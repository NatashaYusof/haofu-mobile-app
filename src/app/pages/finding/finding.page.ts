import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { JobcardService } from '../../../../src/app/services/jobcard.service';
import * as moment from 'moment';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx'
import { File } from '@ionic-native/file/ngx';

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
    this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(this.currentDate)
  }

  goPause() {
    if (this.btn_txt == "PAUSE") {
      this.btn_txt = "RESUME";
      document.body.style.backgroundColor = "red";
    } else {
      this.btn_txt = "PAUSE";
    }
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
}
