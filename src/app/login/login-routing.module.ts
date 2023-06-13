import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Global/material.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginScreenComponent }
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
    LoginLayoutComponent,
    LoginScreenComponent
  ],
  exports: [RouterModule],
  providers:[
    
  ]
})
export class LoginRoutingModule { }
