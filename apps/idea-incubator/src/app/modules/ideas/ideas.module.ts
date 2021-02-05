import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaListItemComponent } from './idea-list-item/idea-list-item.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateIdeaDialogComponent } from './create-idea-dialog/create-idea-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

export const IDEAS_ROUTES = {
  ROOT_ROUTE: 'ideas'
};

const routes: Routes = [
  { path: '', component: IdeasListComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const IDEAS_MAT_IMPORTS = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    IdeaListItemComponent,
    IdeasListComponent,
    CreateIdeaDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...IDEAS_MAT_IMPORTS,
    RouterModule.forChild(routes),
  ]
})
export class IdeasModule { }
