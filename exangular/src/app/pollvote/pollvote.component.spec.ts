import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollvoteComponent } from './pollvote.component';

describe('PollvoteComponent', () => {
  let component: PollvoteComponent;
  let fixture: ComponentFixture<PollvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
