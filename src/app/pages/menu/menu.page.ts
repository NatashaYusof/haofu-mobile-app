import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 selectedPath = '';
 
  pages = [
    {
      title: 'Mattermost Chart',
      url: '/menu/first'
    },
    {
      title: 'Complete Jobcard ',
      url: '/menu/second'
    },
    {
      title: 'Remote Assistence ',
      url: '/menu/first'
    },
    {
      title: 'Take Picture ',
      url: '/menu/second'
    },
    {
      title: 'Photo Editor',
      url: '/menu/first'
    },
  ];
 
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
 
  ngOnInit() {
 
  }

  logout(){

    
  }
}
