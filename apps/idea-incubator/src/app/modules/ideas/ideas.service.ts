import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap, switchMap, tap } from 'rxjs/operators';

import { CreateIdeaDto } from 'apps/api/src/app/modules/idea/dto/create-idea.dto';
import { UpdateIdeaDto } from 'apps/api/src/app/modules/idea/dto/update-idea.dto';
import { Idea } from 'apps/api/src/app/modules/idea/entities/idea.entity';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  public ideas$ = new BehaviorSubject<Array<Idea>>([]);
  private readonly baseUrl = '/api/ideas'

  constructor(
    private http: HttpClient,
  ) { }

  public getIdeas() {
    const url = `${this.baseUrl}`;
    return this.http.get<Array<Idea>>(url).pipe(
      tap(ideas => this.ideas$.next(ideas)),
    );
  }

  public getIdea(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Idea>(url);
  }

  public createIdea(newIdea: CreateIdeaDto) {
    const url = `${this.baseUrl}`;
    return this.http.post<Idea>(url, { ...newIdea }).pipe(
      concatMap(() => this.getIdeas()),
    );
  }

  public updateIdea(id: string, nextIdea: UpdateIdeaDto) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Idea>(url, { ...nextIdea }).pipe(
      switchMap(() => this.getIdeas()),
    );
  }

  public deleteIdea(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url).pipe(
      switchMap(() => this.getIdeas()),
    );
  }
}
