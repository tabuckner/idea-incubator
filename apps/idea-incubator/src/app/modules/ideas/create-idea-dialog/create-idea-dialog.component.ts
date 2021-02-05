import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateIdeaDto } from 'apps/api/src/app/modules/idea/dto/create-idea.dto';


export enum CreateIdeaDialogFormControlNames {
  title = 'title',
  body = 'body',
}

@Component({
  selector: 'idea-incubator-create-idea-dialog',
  templateUrl: './create-idea-dialog.component.html',
  styleUrls: ['./create-idea-dialog.component.scss']
})
export class CreateIdeaDialogComponent implements OnInit {
  public FORM_CONTROL_NAMES = CreateIdeaDialogFormControlNames;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateIdeaDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      [CreateIdeaDialogFormControlNames.title]: ['', [Validators.required, Validators.maxLength(255)]],
      [CreateIdeaDialogFormControlNames.body]: ['', Validators.required]
    });
  }

  public onClickCancel() {
    this.dialogRef.close(false);
  }

  public onClickConfirm() {
    const resultData: CreateIdeaDto = {
      title: this.form.get(CreateIdeaDialogFormControlNames.title).value,
      body: this.form.get(CreateIdeaDialogFormControlNames.body).value,
    }
    this.dialogRef.close(resultData);
  }

}
