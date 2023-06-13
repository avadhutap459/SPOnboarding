import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './Global/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardLayoutComponent } from '../dashboard/dashboard-layout/dashboard-layout.component'
import { SPAppFormComponent } from '../dashboard/spapp-form/spapp-form.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: SPAppFormComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations:[
    DashboardLayoutComponent,
    SPAppFormComponent
  ],
  exports: [RouterModule],
  providers:[
    
  ]
})
export class DashboardRoutingModule { }
