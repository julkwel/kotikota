import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveupFormComponent } from './giveup-form.component';

describe('GiveupFormComponent', () => {
  let component: GiveupFormComponent;
  let fixture: ComponentFixture<GiveupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
