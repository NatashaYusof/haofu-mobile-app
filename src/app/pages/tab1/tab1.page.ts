import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JobcardService } from 'src/app/services/jobcard.service';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  userDetail:any;
  item:any;
  user: any;
  listJC: any;
  details: any;
  serialno: any;
  loading: any;
  dismiss:any;
 

  constructor(public navCtrl: NavController,private router: Router, public http: LoginService,
    public JobcardService:JobcardService,public loadingCtrl: LoadingController) { }

  ngOnInit() {
//to get data after login
   //console.log("user")
   console.log( window.localStorage.getItem('userDetail'))
   this.userDetail = window.localStorage.getItem('userDetail')
   this.details = JSON.parse(this.userDetail)
   console.log(this.details)


   //to get serial  number jobcard
    
   
   this.userDetail =JSON.parse(window.localStorage.getItem('userDetail')) 
   console.log(this.userDetail.employeeid)
   this.getJobcardByEmployeeId(this.userDetail.employeeid)

  }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingCtrl.create({
     // duration: 20000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
   return await this.loading.present();
  }

  getJobcardByEmployeeId(id){
   console.log("sini")
   this.presentLoadingWithOptions();
  this.http.getJobcard(id).subscribe(
          response => {
           this.loading.dismiss(); 
          this.listJC = response.data;
          console.log(this.listJC);
          
        }, error => {
          console.log("error")
        }
      );
  
  }

  goToJobcard(serialno){
    console.log(serialno);
  this.serialno= this.JobcardService.serialno;
    console.log(this.serialno);
   this.router.navigateByUrl('/menu/first/tabs/tab1/jobcard',serialno.JobcardService);
    
  }
  
}
