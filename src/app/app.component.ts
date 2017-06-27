import { Component } from '@angular/core';
import {FrameworkConfigService,FrameworkConfigSettings} from '../fw/services/framework-config.service';
import {MenuService} from '../fw/services/menu.service';
import {initialMenuItems} from './app.menu';
import {UserService} from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public frameworkConfigService: FrameworkConfigService,
              public menuService: MenuService,
              public UserService: UserService){

      let config:FrameworkConfigSettings = {
          socialIcons: [
            {imageFile: '../assets/facebook.svg', alt: 'Facebook', link:'http://www.facebook.com' },
            {imageFile: '../assets/twitter.svg', alt: 'Twitter', link:'http://www.twitter.com' },
            {imageFile: '../assets/google-plus.svg', alt: 'Google', link:'http://www.google.com' }
          ],
          showLanguageSelector: true,
          showUserCtrl: true,
          showStatusBar: true,
          showStatusBarBreakpoint: 800
      };

      frameworkConfigService.configure(config);
      menuService.items = initialMenuItems;
  }
}
