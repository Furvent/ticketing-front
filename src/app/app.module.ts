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

@NgModule({
  declarations: [
    AppComponent,
    TestingServicesComponent,
    ConnectionComponent,
    GeneralDashboardComponent,
    GroupDashboardComponent
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
