import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdeaDialogComponent } from './create-idea-dialog.component';

describe('CreateIdeaDialogComponent', () => {
  let component: CreateIdeaDialogComponent;
  let fixture: ComponentFixture<CreateIdeaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIdeaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIdeaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
