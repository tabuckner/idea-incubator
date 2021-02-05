import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaListItemComponent } from './idea-list-item.component';

describe('IdeaListItemComponent', () => {
  let component: IdeaListItemComponent;
  let fixture: ComponentFixture<IdeaListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
