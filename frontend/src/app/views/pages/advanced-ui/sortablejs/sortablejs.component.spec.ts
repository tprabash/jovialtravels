import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortablejsComponent } from './sortablejs.component';

describe('SortablejsComponent', () => {
  let component: SortablejsComponent;
  let fixture: ComponentFixture<SortablejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortablejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortablejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
