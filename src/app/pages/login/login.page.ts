import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, FormControl, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user;
  loading: any;
  username = "";
  userpassword = "";
  FormGroup;

  
  constructor(
    private http: LoginService,
    private router: Router,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
   ) { }

  ngOnInit() {
  this.user= new FormGroup({
  username: new FormControl('', [Validators.required]),
  userpassword: new FormControl('', [Validators.required]),
  });
  }

  async presentAlert() {
    
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Access denied',
      message: 'Wrong username or password.',
      buttons: ['OK']
    });

    await alert.present();
  }


login(): void {
//  console.log('masuk');

  console.log(this.username);
  console.log(this.userpassword);

  
  this.http.getUser(this.username,this.userpassword).subscribe(
        response => {
       
          this.user = response;
          console.log(this.user)
          window.localStorage.setItem('userDetail', JSON.stringify(this.user));
        
          if (this.user.employee.employeejobtitle == 'Technician') {
          
            this.router.navigateByUrl('/menu/first');
           
         
          } else {
            this.router.navigateByUrl('/second');
          
          }

        }, error => {
		// tslint:disable-next-line: indent
    // if error it goes here
    this.presentAlert();

        }
      );
    }

  }

  // showloader(){
  //   this.loading=this.loadingCtrl.create({
  //     content : 'Loading....'
  //   })

  //   this.loading.present();
  // }




