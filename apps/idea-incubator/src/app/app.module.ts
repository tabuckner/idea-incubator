import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { IdeasListComponent } from './modules/ideas/ideas-list/ideas-list.component';
import { IdeasModule } from './modules/ideas/ideas.module';

export const APP_MAT_IMPORTS = [
  MatToolbarModule,
];

export const APP_APPLICATION_IMPORTS = [
  IdeasModule,
];

const DEFAULT_ROUTE = 'list';

const routes: Routes = [
  {
    path: 'list',
    component: IdeasListComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: DEFAULT_ROUTE,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: DEFAULT_ROUTE,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ...APP_MAT_IMPORTS,
    ...APP_APPLICATION_IMPORTS,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
