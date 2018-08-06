import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorImageComponent } from './actor-image.component';

describe('ActorImageComponent', () => {
  let component: ActorImageComponent;
  let fixture: ComponentFixture<ActorImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
