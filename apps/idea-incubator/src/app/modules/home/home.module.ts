import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { RouterModule, Routes } from '@angular/router';

export const HOME_ROUTES = {
  ROOT_ROUTE: 'home',
};

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
