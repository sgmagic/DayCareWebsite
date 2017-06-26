import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';

import{ FrameworkBodyComponent } from './framework-body/framework-body.component';
import{ ContentComponent } from './content/content.component';
import{ TitleBarComponent } from './titlebar/titlebar.component';
import{ TopBarComponent } from './top-bar/top-bar.component';
import{ StatusbarComponent } from './statusbar/statusbar.component';
import{ MenuComponent } from './menus/menu/menu.component';
import{ MenuItemComponent } from './menus/menu-item/menu-item.component';


import{ MenuService } from './services/menu.service';
import{ ScreenService } from './services/screen.service';
import{ FrameworkConfigService } from './services/framework-config.service';
import { AlertService } from './services/alert.service';

import{ ScreenLarge } from './directives/screen-large.directive';
import{ ScreenBelowLarge } from './directives/screen-below-large.directive';


import { DialogComponent } from './helpers/dialog/dialog.component';
import { AlertComponent } from './directives/alerts/alert.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { EqualValidator } from './directives/validators/equal-validator.directive';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTabsModule,
    MdRadioModule
  ],
  declarations: [
      EqualValidator,
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusbarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent,
    DialogComponent,
    SignInComponent,
    RegisterUserComponent,
    AlertComponent
  ],
  providers:[
    FrameworkConfigService,
    ScreenService,
    MenuService,
    AlertService
  ],
  exports:[
    FrameworkBodyComponent,
    DialogComponent,
    SignInComponent,
    RegisterUserComponent
  ]
})
export class FwModule { }
