import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { fakeBackendProvider } from '../app/helpers/fakeApi';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { OrganizationComponent } from './organization/organization.component';
import { ParentsComponent } from './parents/parents.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';

import { appRoutes } from './app.routing';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { UserService } from './services/user.service';

import { AuthenticationService } from './services/authentication.service';

import { AuthGuard } from '../app/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    ParentsComponent,
    FeaturesComponent,
    AboutusComponent,
    PricingComponent,
    HomeComponent,
    AuthenticatedUserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FwModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTabsModule,
    MdRadioModule
  ],
  // exports:[MdInputModule],
  providers: [
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    UserService,
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
