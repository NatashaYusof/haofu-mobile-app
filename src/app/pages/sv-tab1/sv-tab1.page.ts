import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sv-tab1',
  templateUrl: './sv-tab1.page.html',
  styleUrls: ['./sv-tab1.page.scss'],
})
export class SvTab1Page implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  dashboard(){
    this.router.navigateByUrl('/second/tabs/sv-tab1/dashboard');
  }

  projectmanagement(){
    this.router.navigateByUrl('/second/tabs/sv-tab1/prjctmanagement');
  }
}
