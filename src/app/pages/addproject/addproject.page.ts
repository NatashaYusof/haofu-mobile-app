import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController,ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.page.html',
  styleUrls: ['./addproject.page.scss'],
})
export class AddprojectPage implements OnInit {

  constructor(
     public modalController: ModalController,
    ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
