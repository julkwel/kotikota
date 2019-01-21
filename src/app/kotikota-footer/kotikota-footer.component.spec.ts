import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotikotaFooterComponent } from './kotikota-footer.component';

describe('KotikotaFooterComponent', () => {
  let component: KotikotaFooterComponent;
  let fixture: ComponentFixture<KotikotaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotikotaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotikotaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
