import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestingServicesComponent } from './tests/testing-services/testing-services.component';
import { ConnectionComponent } from './views/connection/connection/connection.component';
import { GeneralDashboardComponent } from './views/general-dashboard/general-dashboard/general-dashboard.component';
import { GroupDashboardComponent } from './views/group-dashboard/group-dashboard/group-dashboard.component';
import { SignInComponent } from './views/connection/sign-in/sign-in.component';
import { SignUpComponent } from './views/connection/sign-up/sign-up.component';
import { GroupsListComponent } from './views/general-dashboard/groups-list/groups-list.component';
import { ProfileComponent } from './views/general-dashboard/profile/profile.component';
import { GroupDataComponent } from './views/general-dashboard/groups-list/group-data/group-data.component';
import { ProfilEditionComponent } from './views/general-dashboard/profile/profil-edition/profil-edition.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingServicesComponent,
    ConnectionComponent,
    GeneralDashboardComponent,
    GroupDashboardComponent,
    SignInComponent,
    SignUpComponent,
    GroupsListComponent,
    ProfileComponent,
    GroupDataComponent,
    ProfilEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
