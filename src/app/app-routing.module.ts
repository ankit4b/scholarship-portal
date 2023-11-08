import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScholarshipListComponent } from './components/scholarship-list/scholarship-list.component';
import { ApplyScholarshipComponent } from './components/apply-scholarship/apply-scholarship.component';
import { ProfileInformationFormComponent } from './components/profile-information-form/profile-information-form.component';
import { AcademicInformationFormComponent } from './components/academic-information-form/academic-information-form.component';
import { AccountInformationFormComponent } from './components/account-information-form/account-information-form.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard],
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'scholarship-list', component: ScholarshipListComponent},
      {path: 'apply-scholarship', component: ApplyScholarshipComponent,
        children: [
          {path: 'profile-information-from', component: ProfileInformationFormComponent},
          {path: 'academic-information-from', component: AcademicInformationFormComponent},
          {path: 'account-information-from', component: AccountInformationFormComponent},
          {path: '', redirectTo: 'profile-information-from', pathMatch: 'full'}
        ]
      },
      {path: '', redirectTo: 'profile', pathMatch: "full"}
    ]
  },
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
