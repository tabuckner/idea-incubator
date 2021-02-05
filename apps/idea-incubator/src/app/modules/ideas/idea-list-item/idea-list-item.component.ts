import { Component, Input, OnInit } from '@angular/core';
import { Idea } from 'apps/api/modules/idea/entities/idea.entity';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'idea-incubator-idea-list-item',
  templateUrl: './idea-list-item.component.html',
  styleUrls: ['./idea-list-item.component.scss']
})
export class IdeaListItemComponent implements OnInit {
  @Input() idea: Idea;

  constructor(
    private ideasService: IdeasService,
  ) { }

  ngOnInit(): void {
  }

  public onUpVote() {

  }
  public onDownVote() {

  }
  public onDelete() {
    console.warn('hit')
    return this.ideasService.deleteIdea(this.idea.id).subscribe();
  }

}
