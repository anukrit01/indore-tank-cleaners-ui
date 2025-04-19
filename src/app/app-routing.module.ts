import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadFormComponent } from './lead-form/lead-form.component';

const routes: Routes = [
  { path: '', component: LeadFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
