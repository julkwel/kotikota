import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotikotaDashboardComponent } from './kotikota-dashboard.component';

describe('KotikotaDashboardComponent', () => {
  let component: KotikotaDashboardComponent;
  let fixture: ComponentFixture<KotikotaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotikotaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotikotaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
