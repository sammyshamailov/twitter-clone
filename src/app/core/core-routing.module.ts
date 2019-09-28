import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../components/home-page/home-page.component';
import { SigninPageComponent } from '../components/signin-page/signin-page.component';
import { SignupPageComponent } from '../components/signup-page/signup-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'register',
    component: SignupPageComponent
  },
  {
    path: 'login',
    component: SigninPageComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }