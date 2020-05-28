import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPatComponent } from './search-pat.component';

describe('SearchPatComponent', () => {
  let component: SearchPatComponent;
  let fixture: ComponentFixture<SearchPatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
