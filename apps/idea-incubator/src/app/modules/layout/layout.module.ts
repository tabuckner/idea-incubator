import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


export const LAYOUT_MAT_IMPORTS = [
  MatToolbarModule,
];

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ...LAYOUT_MAT_IMPORTS,
    NgxAuthFirebaseUIModule,
  ],
  exports: [ToolbarComponent]
})
export class LayoutModule { }
