import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { WorkorderService } from '../../../../src/app/services/workorder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // @ViewChild('hrzBarChart5', { static: true }) hrzBarChart5;
  @ViewChild('slides', { static: true }) slider: IonSlides;
  
  segment = 0;
  hrzBars5: any;
  colorArray: any;
  supervisor: any;
  technician: any;
  engineer: any;
  total: any;
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
  closed: any;
  delayed: any;
  
  constructor(
    // private http: HttpClient, 
    public http: WorkorderService,
  )
   {   }

  //  ionViewDidEnter() {
  //   this.generateColorArray(8);
  //   this.createHrzBarChart5()
  // }
  ngOnInit() {

    this.getSupervisor();
    this.getTechnician();
    this.getEngineer();
    this.getTotal();
    this.getWorkOrder();
    this.getWorkSheet();
    this.getClosed();
    this.getDelayed();
  }
  async segmentChanged() {
    this.focusSegment(event['srcElement']['children'][this.segment]['id']);
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  focusSegment(segmentId) {
    document.getElementById(segmentId).scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
}

getSupervisor() {
  this.http.getSupervisor().subscribe(
    response => {
      this.supervisor = response.Actual_Total_Records_Found;
      console.log(this.supervisor)
    }, error => {
      console.log("error")
    }
  );

}

getTechnician() {
  this.http.getTechnician().subscribe(
    response => {
      this.technician = response.Actual_Total_Records_Found;
      console.log(this.technician)
    }, error => {
      console.log("error")
    }
  );
  }

  getEngineer() {
    this.http.getEngineer().subscribe(
      response => {
        this.engineer = response.Actual_Total_Records_Found;
        console.log(this.engineer)
      }, error => {
        console.log("error")
      }
    );
    }

    getTotal() {
      this.http.getTotal().subscribe(
        response => {
          this.total = response.Actual_Total_Records_Found;
          console.log(this.total)
        }, error => {
          console.log("error")
        }
      );
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

      
    getClosed() {
      this.http.getClosed().subscribe(
        response => {
          this.closed = response.total_closed_radomes;
          console.log(this.closed)
        }, error => {
          console.log("error")
        }
      );
      }

      
    getDelayed() {
      this.http.getDelayed().subscribe(
        response => {
          this.delayed = response.total_delayed_radomes;
          console.log(this.delayed)
        }, error => {
          console.log("error")
        }
      );
      }

  // generateColorArray(num) {
  //   this.colorArray = [];
  //   for (let i = 0; i < num; i++) {
  //     this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
  //   }
  // }
  // createHrzBarChart5() {
  //   let ctx = this.hrzBarChart5.nativeElement;
  //   ctx.height = 400;
  //   this.hrzBars5 = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
  //       datasets: [{
  //         label: 'Online viewers in millions',
  //         data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
  //         backgroundColor: 'rgb(245, 229, 27)', // array should have same number of elements as number of dataset
  //         borderColor: 'rgb(245, 229, 27)',// array should have same number of elements as number of dataset
  //         borderWidth: 1
  //       },
  //       {
  //         label: 'Offline viewers in millions',
  //         data: [1.5, 2.8, 3, 3.9, 4.9, 5.5, 7, 12],
  //         backgroundColor: 'rgb(63, 195, 128)', // array should have same number of elements as number of dataset
  //         borderColor: 'rgb(63, 195, 128)',// array should have same number of elements as number of dataset
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         xAxes: [{
  //           barPercentage: 0.9,
  //           gridLines: {
  //             offsetGridLines: true
  //           },
  //           stacked: true
  //         }],
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           },
  //           stacked: true
  //         }]
  //       }
  //     }
  //   });
  // }

    
}