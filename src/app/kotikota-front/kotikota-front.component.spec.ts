import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotikotaFrontComponent } from './kotikota-front.component';

describe('KotikotaFrontComponent', () => {
  let component: KotikotaFrontComponent;
  let fixture: ComponentFixture<KotikotaFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotikotaFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotikotaFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
