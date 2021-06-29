import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingServicesComponent } from './tests/testing-services/testing-services.component';
import { ConnectionComponent } from './views/connection/connection.component';
import { GeneralDashboardComponent } from './views/general-dashboard/general-dashboard.component';
import { GroupDashboardComponent } from './views/group-dashboard/group-dashboard.component';

const routes: Routes = [
  { path: 'tests', component: TestingServicesComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'general-dashboard', component: GeneralDashboardComponent },
  { path: 'group-dashboard', component: GroupDashboardComponent },
  { path: '', redirectTo: 'connection', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
