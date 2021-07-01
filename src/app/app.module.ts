import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestingServicesComponent } from './tests/testing-services/testing-services.component';
import { ConnectionComponent } from './views/connection/connection.component';
import { GeneralDashboardComponent } from './views/general-dashboard/general-dashboard.component';
import { GroupDashboardComponent } from './views/group-dashboard/group-dashboard.component';
import { SignInComponent } from './views/connection/sign-in/sign-in.component';
import { SignUpComponent } from './views/connection/sign-up/sign-up.component';
import { GroupsListComponent } from './views/general-dashboard/groups-list/groups-list.component';
import { ProfileComponent } from './views/general-dashboard/profile/profile.component';
import { ProfilEditionComponent } from './views/general-dashboard/profile/profil-edition/profil-edition.component';
import { AllTicketsListComponent } from './views/group-dashboard/all-tickets-list/all-tickets-list.component';
import { MyTicketsListComponent } from './views/group-dashboard/my-tickets-list/my-tickets-list.component';
import { AdminOptionsComponent } from './views/group-dashboard/admin-options/admin-options.component';
import { TicketDetailsComponent } from './views/group-dashboard/ticket-details/ticket-details.component';
import { UpdateTicketComponent } from './views/group-dashboard/ticket-edition/update-ticket/update-ticket.component';
import { AddTicketComponent } from './views/group-dashboard/ticket-edition/add-ticket/add-ticket.component';
import { TicketEditionComponent } from './views/group-dashboard/ticket-edition/ticket-edition.component';
import { AddUserGroupComponent } from './views/group-dashboard/admin-options/add-user-group/add-user-group.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field/';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateGroupComponent } from './views/general-dashboard/groups-list/create-group/create-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestTicketDetailsComponent } from './tests/test-ticket-details/test-ticket-details.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { TicketDetailsModalComponent } from './views/group-dashboard/ticket-details-modal/ticket-details-modal.component';

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
    ProfilEditionComponent,
    AllTicketsListComponent,
    MyTicketsListComponent,
    AdminOptionsComponent,
    TicketDetailsComponent,
    UpdateTicketComponent,
    AddTicketComponent,
    TicketEditionComponent,
    AddUserGroupComponent,
    CreateGroupComponent,
    TestTicketDetailsComponent,
    TicketDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill', floatLabel: 'always' },
    },
    FormBuilder,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
