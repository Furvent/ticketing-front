import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingServicesComponent } from './tests/testing-services/testing-services.component';

const routes: Routes = [
  {path: 'tests', component: TestingServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
