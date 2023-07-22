import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexchartsComponent } from './apexcharts.component';

describe('ApexchartsComponent', () => {
  let component: ApexchartsComponent;
  let fixture: ComponentFixture<ApexchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
