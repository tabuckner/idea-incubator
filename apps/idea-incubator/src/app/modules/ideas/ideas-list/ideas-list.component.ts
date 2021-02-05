import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateIdeaDto } from 'apps/api/modules/idea/dto/create-idea.dto';
import { Idea } from 'apps/api/modules/idea/entities/idea.entity';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { CreateIdeaDialogComponent } from '../create-idea-dialog/create-idea-dialog.component';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'idea-incubator-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdeasListComponent implements OnInit {

  constructor(
    private ideasService: IdeasService,
    private dialog: MatDialog,
  ) { }

  public ideas$ = this.ideasService.ideas$;

  ngOnInit(): void {
    this.ideasService.getIdeas().subscribe();
  }

  public onClickAdd() {
    this.dialog.open(CreateIdeaDialogComponent).afterClosed().pipe(
      // takeUntil(this._onDestroy),
      filter(createResultData => createResultData),
      switchMap((newIdea: CreateIdeaDto) => {
        return this.ideasService.createIdea(newIdea);
      })
    ).subscribe();
  }

}
