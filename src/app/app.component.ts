import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-seo';
  navigation = [
    {
      title: 'Home',
      href: '/home'
    },
    {
      title: 'Country',
      href: '/country'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {

  }

  ngOnInit() {
    window.addEventListener('orientationchange', this.handleOrientationChange); // Orientation change event

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('App_name', 'Seo-Demo');

      setTimeout(() => {
        console.log('App Name: ', localStorage.getItem('App_name'));
      }, 2000);
    }

  }

  handleOrientationChange = (event) => {
    console.log('Orientation changed: ', event); // Print in console
  }
}
