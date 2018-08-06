import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardDialogComponent } from './scoreboard-dialog.component';

describe('ScoreboardDialogComponent', () => {
  let component: ScoreboardDialogComponent;
  let fixture: ComponentFixture<ScoreboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreboardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
