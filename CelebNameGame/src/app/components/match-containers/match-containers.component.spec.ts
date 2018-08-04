import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchContainersComponent } from './match-containers.component';

describe('MatchContainersComponent', () => {
  let component: MatchContainersComponent;
  let fixture: ComponentFixture<MatchContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
