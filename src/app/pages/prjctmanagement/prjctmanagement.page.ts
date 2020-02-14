import { Component, OnInit } from '@angular/core';
import { WorkorderService } from '../../../../src/app/services/workorder.service';
import { AlertController, LoadingController,ModalController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';
import { JobcardService } from '../../../../src/app/services/jobcard.service';
import { EditPage } from '../edit/edit.page';
import { AddprojectPage } from '../addproject/addproject.page';

@Component({
  selector: 'app-prjctmanagement',
  templateUrl: './prjctmanagement.page.html',
  styleUrls: ['./prjctmanagement.page.scss'],
})
export class PrjctmanagementPage implements OnInit {
  segment: any;
  workOrders: any;
  workOrder:any;
  new:any[]=[];
  approve: any[]=[];
  activate:any[]=[];
  completedWO:any[]=[];
  inProgressWO:any[]=[];
  newWO:any[]=[];
  wWorksheet: any;
  validateWW: any[]=[];
  pendingWW: any[]=[];
  dataReturned: any;

  constructor(
    public http: WorkorderService,
    public modalController: ModalController,
    public JobcardService: JobcardService,
  )
   { 
     this.segment="todolist";
     this.segment="activate";
    }
  
  
   ngOnInit() {
    this.getWorkOrder();
    this.getWorkSheet();
  }

  getWorkOrder() {
    this.http.getWorkOrder().subscribe(
      response => {

        this.workOrders = response.Result;
        let workOrderidArr = []
        console.log(this.workOrders)
        this.workOrders.forEach(workOrder => {
          workOrderidArr.push(workOrder.workorderid)
          // console.log(workOrder)

          if(Array.isArray(workOrder.workorderstatus)){
          workOrder.workorderstatus.forEach(wwstatus=>{

            if (wwstatus.workorderstatusintegervalue == 2 || wwstatus.workorderstatusintegervalue == 8 || wwstatus.workorderstatusintegervalue == 16) {
              this.activate.push(workOrder)
                              // sort by name
                this.activate.sort(function(a, b) {
                  var workordernoA = a.workorderno.toUpperCase(); // ignore upper and lowercase
                  var workordernoB = b.workorderno.toUpperCase(); // ignore upper and lowercase
                  if (workordernoA < workordernoB) {
                    return -1;
                  }
                  if (workordernoA > workordernoB) {
                    return 1;
                  }

                  // names must be equal
                  return 0;
                });

                
            }

            if (wwstatus.workorderstatusintegervalue == 128) {
              // this.inProgressWO.push(workOrder)
            } else if (wwstatus.workorderstatusintegervalue == 32) {
              this.completedWO.push(workOrder);
            }

            if(wwstatus.workorderstatus == "In Progress/Approve"){
              
              this.approve.push(workOrder)

              this.inProgressWO.push(workOrder)

            } else if(wwstatus.workorderstatus == "In Progress" || wwstatus.workorderstatus == "Modified"){
              
              this.inProgressWO.push(workOrder);

            } else if(wwstatus.workorderstatus == "Not Started"){
              
              this.newWO.push(workOrder);
            }            

          })
        }

        });
      }
    )

  }

  getWorkSheet() {
    this.http.getWorkSheet().subscribe(
      response=>{
        this.wWorksheet = response.Result;

          this.wWorksheet.forEach(wwStatus => {

            if(wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 4){
              this.validateWW.push(wwStatus);
            }


            if(wwStatus.worksheetstatus[0].worksheetstatus == "Modified"){
              this.pendingWW.push(wwStatus);
            }
        })
      }, error => {
        console.log(error)
      }
    )

  } 
  async goView(workorderid) {
    console.log(workorderid);
    this.JobcardService.workorderId=workorderid;
    const modal = await this.modalController.create({
      component: ViewPage,
      componentProps: {
        
        "paramWorkOrderId": workorderid,
       
        // "paramTitle": "Test Title"
      }
      
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

  async goEdit(workorderid) {
    console.log(workorderid);
    this.JobcardService.workorderId=workorderid;
    const modal = await this.modalController.create({
      component: EditPage,
      componentProps: {
        
        "paramWorkOrderId": workorderid,
       
        // "paramTitle": "Test Title"
      }
      
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

  async goAdd() {
    console.log();
    // this.JobcardService.workorderId=workorderid;
    const modal = await this.modalController.create({
      component: AddprojectPage,
      componentProps: {
        
        // "paramWorkOrderId": workorderid,
       
        // "paramTitle": "Test Title"
      }
      
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

}
