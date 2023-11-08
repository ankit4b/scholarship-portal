import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderBodyComponent } from './components/header-body/header-body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ScholarshipsListComponent } from './components/scholarships-list/scholarships-list.component';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ScholarshipStatusCardComponent } from './components/scholarship-status-card/scholarship-status-card.component';
import { ScholarshipListComponent } from './components/scholarship-list/scholarship-list.component';
import { ApplyScholarshipComponent } from './components/apply-scholarship/apply-scholarship.component';
import { ProfileInformationFormComponent } from './components/profile-information-form/profile-information-form.component';
import { AcademicInformationFormComponent } from './components/academic-information-form/academic-information-form.component';
import { AccountInformationFormComponent } from './components/account-information-form/account-information-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environments';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    HeaderBodyComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    ScholarshipsListComponent,
    ProfileComponent,
    ProfileCardComponent,
    ScholarshipStatusCardComponent,
    ScholarshipListComponent,
    ApplyScholarshipComponent,
    ProfileInformationFormComponent,
    AcademicInformationFormComponent,
    AccountInformationFormComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
