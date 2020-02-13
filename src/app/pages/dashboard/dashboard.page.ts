import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { WorkorderService } from '../../../../src/app/services/workorder.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  @ViewChild('barChart', { static: true }) barChart: Element;

  bars: any;
  colorArray: any;
  segment = 0;
 y;
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
   {  }

  ngOnInit() {

    this.getSupervisor();
    this.getTechnician();
    this.getEngineer();
    this.getTotal();
    this.getWorkOrder();
    this.getWorkSheet();
    this.getClosed();
    this.getDelayed();
    // this.plotSimpleBarChart();
  }


  // async segmentChanged() {
  //   this.focusSegment(event['srcElement']['children'][this.segment]['id']);
  //   await this.slider.slideTo(this.segment);
  // }

//   async slideChanged() {
//     this.segment = await this.slider.getActiveIndex();
//   }
//   focusSegment(segmentId) {
//     document.getElementById(segmentId).scrollIntoView({ 
//       behavior: 'smooth',
//       block: 'center',
//       inline: 'center'
//     });
// }

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

      // plotSimpleBarChart() {
      //   var myChart =  Highcharts.chart('highcharts', {
          
      //     chart: {
      //       type: 'column'
      //     },
          
      //     xAxis: {
      //       categories: ['Today', 'Tomorrow', 'Day+2', 'Day+3', 'Day+4', 'Day+5']
      //     },
      //     yAxis: {
      //       min: 0,
        
      //       stackLabels: {
      //         enabled: true,
      //         style: {
        
      //           color: ( // theme
      //             Highcharts.defaultOptions.title.style &&
      //             Highcharts.defaultOptions.title.style.color
      //           ) || 'gray'
      //         }
      //       }
      //     },
      //     legend: {
      //       align: 'right',
      //       verticalAlign: 'top',
      //       floating: true,
      //       backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
      //       borderColor: '#CCC',
      //       borderWidth: 1,
      //       shadow: false
      //     },
        
      //     plotOptions: {
      //       column: {
      //         stacking: 'normal',
      //         dataLabels: {
      //           enabled: true
      //         }
      //       }
      //     },
      //     series: [{
      //       name: 'John',
      //       type:undefined,
      //       data: [5, 3, 4, 7, 2, 1]
      //     }, {
      //       name: 'Jane',
      //       type:undefined,
      //       data: [2, 2, 3, 2, 1, 1]
      //     }, {
      //       name: 'Joe',
      //       type:undefined,
      //       data: [3, 4, 4, 2, 5, 2]
      //     }]
      //   });
      // }
        
}