import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChipsComponent } from './ngx-chips.component';

describe('NgxChipsComponent', () => {
  let component: NgxChipsComponent;
  let fixture: ComponentFixture<NgxChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
