import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxColorPickerComponent } from './ngx-color-picker.component';

describe('NgxColorPickerComponent', () => {
  let component: NgxColorPickerComponent;
  let fixture: ComponentFixture<NgxColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
