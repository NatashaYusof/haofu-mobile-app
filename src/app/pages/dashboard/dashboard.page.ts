import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // @ViewChild('hrzBarChart5', { static: true }) hrzBarChart5;
 
  segment : any;
  hrzBars5: any;
  colorArray: any;
  constructor(
    private http: HttpClient, 
  )
   {  this.segment="todolist"; }

  //  ionViewDidEnter() {
  //   this.generateColorArray(8);
  //   this.createHrzBarChart5()
  // }
  ngOnInit() {
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