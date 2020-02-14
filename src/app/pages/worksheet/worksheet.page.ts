import { Component, OnInit } from '@angular/core';
import { WorkorderService } from '../../../../src/app/services/workorder.service';
import { AlertController, LoadingController,ModalController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';
import { JobcardService } from '../../../../src/app/services/jobcard.service';
import { EditPage } from '../edit/edit.page';
import { AddprojectPage } from '../addproject/addproject.page';
@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.page.html',
  styleUrls: ['./worksheet.page.scss'],
})
export class WorksheetPage implements OnInit {
  segment: any;
  workOrders: any;
  workOrder:any;
  approve: any[]=[];
  activate:any[]=[];
  wWorksheet: any;
  validateWW: any[]=[];
  pendingWW: any[]=[];
  dataReturned: any;
  concludeWW: any[]=[];
  inProgressWW: any[]=[];
  completedWW: any[]=[];

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
    this.getWorkSheet();
  }

 
  getWorkSheet() {
    this.http.getWorkSheet().subscribe(
      response=>{
        this.wWorksheet = response.Result;

          this.wWorksheet.forEach(wwStatus => {

            // if(wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 4){
            //   this.validateWW.push(wwStatus);
            // }
            
            if (wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 2 || wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 8 || wwStatus.worksheetstatus[0].worksheetstatusintegervalue == 16) {
              this.activate.push(wwStatus)
                // sort by name
               this.activate.sort(function(a, b) {
              var workordernumberA = a.workordernumber.toUpperCase(); // ignore upper and lowercase
              var workordernumberB = b.workordernumber.toUpperCase(); // ignore upper and lowercase
              if (workordernumberA < workordernumberB) {
                return -1;
              }
              if (workordernumberA > workordernumberB) {
                return 1;
              }

              // names must be equal
              return 0;
            });

              }
            

            // if(wwStatus.worksheetstatus[0].worksheetstatus == "Activate"){
            //   this.activate.push(wwStatus);
            // }

            if(wwStatus.worksheetstatus[0].worksheetstatus == "Modified"){
              this.pendingWW.push(wwStatus);
            }

            if(wwStatus.worksheetstatus[0].worksheetstatus == "Conclude"){
              this.concludeWW.push(wwStatus);
            }
            
            if(wwStatus.worksheetstatus[0].worksheetstatus == "In Progress"){
              this.inProgressWW.push(wwStatus);
            }
            
            if(wwStatus.worksheetstatus[0].worksheetstatus == "Completed"){
              this.completedWW.push(wwStatus);
            }
        })
      }, error => {
        console.log(error)
      }
    )

  } 
 
}
