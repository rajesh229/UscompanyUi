import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersdasboardComponent } from './othersdasboard.component';

describe('OthersdasboardComponent', () => {
  let component: OthersdasboardComponent;
  let fixture: ComponentFixture<OthersdasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersdasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersdasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
