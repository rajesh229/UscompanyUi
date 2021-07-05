import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationformComponent } from './registationform.component';

describe('RegistationformComponent', () => {
  let component: RegistationformComponent;
  let fixture: ComponentFixture<RegistationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
