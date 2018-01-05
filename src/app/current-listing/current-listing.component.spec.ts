import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentListingComponent } from './current-listing.component';

describe('CurrentListingComponent', () => {
  let component: CurrentListingComponent;
  let fixture: ComponentFixture<CurrentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
