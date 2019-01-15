import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotikotaLoginComponent } from './kotikota-login.component';

describe('KotikotaLoginComponent', () => {
  let component: KotikotaLoginComponent;
  let fixture: ComponentFixture<KotikotaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotikotaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotikotaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
