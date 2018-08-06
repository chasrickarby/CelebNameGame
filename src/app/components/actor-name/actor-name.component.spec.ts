import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorNameComponent } from './actor-name.component';

describe('ActorNameComponent', () => {
  let component: ActorNameComponent;
  let fixture: ComponentFixture<ActorNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
