import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatherComponent } from './feather.component';

describe('FeatherComponent', () => {
  let component: FeatherComponent;
  let fixture: ComponentFixture<FeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
