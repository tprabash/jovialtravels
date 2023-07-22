import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDropzoneWrapperComponent } from './ngx-dropzone-wrapper.component';

describe('NgxDropzoneWrapperComponent', () => {
  let component: NgxDropzoneWrapperComponent;
  let fixture: ComponentFixture<NgxDropzoneWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDropzoneWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDropzoneWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
