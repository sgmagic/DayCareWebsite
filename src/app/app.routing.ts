import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrganizationComponent } from './organization/organization.component';
import { ParentsComponent } from './parents/parents.component';
import { FeaturesComponent } from './features/features.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PricingComponent } from './pricing/pricing.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

export const appRoutes: Routes = [
    { path: 'authenticateduser', component: AuthenticatedUserComponent,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    // { path: 'authenticated', component: AuthenticatedUserComponent, },
    { path: 'home', component: HomeComponent },
    { path: 'organization', component: OrganizationComponent },
    { path: 'parents', component: ParentsComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'pricing', component: PricingComponent },
    // otherwise redirect to home
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
    // { path: '', component:SignInComponent },
    // { path: '**', component:SignInComponent }
];
