import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prjctmanagement',
  templateUrl: './prjctmanagement.page.html',
  styleUrls: ['./prjctmanagement.page.scss'],
})
export class PrjctmanagementPage implements OnInit {
  segment: any;

  constructor(

  )
   { this.segment="todolist";}
  
  
   ngOnInit() {
  }

}
