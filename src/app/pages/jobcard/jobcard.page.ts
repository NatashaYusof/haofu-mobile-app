import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private http: LoginService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {

    // console.log( window.localStorage.getItem('serialno'))
    // this.serialno = window.localStorage.getItem('serialno')
    // this.serialno = JSON.parse(this.serialno)
    // console.log(this.serialno)

    this.userDetail =JSON.parse(window.localStorage.getItem('userDetail')) 
    console.log(this.userDetail.employeeid)
    this.getJobcardByEmployeeId(this.userDetail.employeeid)

  
  }

  getJobcardByEmployeeId(id){
    console.log("sini")
  
  this.http.getJobcard(id).subscribe(
        response => {
          this.listJCard= response.data;
         console.log(this.listJCard)
          this.listJCard.forEach((jobcards)=>{
            console.log(jobcards);
            
            this.JCard=jobcards;

            this.JCard.jobcards.forEach((List)=>{
              console.log(List.jobcardtitle);

            });
          }, error => {
            console.log("error")
          
          });
        }, error => {
          console.log("error")
        }
        );
  
  }



}

