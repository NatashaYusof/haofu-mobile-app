import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController,ModalController, NavParams } from '@ionic/angular';
import { WorkorderService } from '../../../../src/app/services/workorder.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  WorkOrderId: any;
  Wo: any;
  Wo1: any;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    public http: WorkorderService,

  ) { }

  ngOnInit() {
    this.WorkOrderId =  this.navParams.get('paramWorkOrderId')
    console.log(this.WorkOrderId)
    this.getViewWorkOrder(this.WorkOrderId);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  getViewWorkOrder(workorderid) {
    this.http.getViewWorkOrder(workorderid).subscribe(
      response => {
        this.Wo=response.Result;
        console.log(this.Wo)
        this.Wo1=response.Result[0].workorderstatus;
      }, error => {
        console.log("error")
      }
    );

  }
}
