import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { IdeasModule, IDEAS_ROUTES } from './modules/ideas/ideas.module';
import { environment } from '../environments/environment';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { NgxAuthFirebaseUIModule, LoggedInGuard } from 'ngx-auth-firebaseui';
import { HOME_ROUTES } from './modules/home/home.module';
import { LayoutModule } from './modules/layout/layout.module';


export const APP_MAT_IMPORTS = [
  MatToolbarModule,
];

export const APP_APPLICATION_IMPORTS = [
  LayoutModule,
];

const DEFAULT_ROUTE = HOME_ROUTES.ROOT_ROUTE;

const routes: Routes = [
  {
    path: HOME_ROUTES.ROOT_ROUTE,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: IDEAS_ROUTES.ROOT_ROUTE,
    loadChildren: () => import('./modules/ideas/ideas.module').then(m => m.IdeasModule),
    canActivate: [LoggedInGuard],
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
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    NgxAuthFirebaseUIModule.forRoot(
      { ...environment.firebase },
      undefined,
      {
        authGuardFallbackURL: HOME_ROUTES.ROOT_ROUTE,
        authGuardLoggedInURL: IDEAS_ROUTES.ROOT_ROUTE,
      }
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ...APP_MAT_IMPORTS,
    ...APP_APPLICATION_IMPORTS,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
