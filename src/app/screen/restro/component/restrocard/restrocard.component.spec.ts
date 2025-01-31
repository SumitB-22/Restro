import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrocardComponent } from './restrocard.component';

describe('RestrocardComponent', () => {
  let component: RestrocardComponent;
  let fixture: ComponentFixture<RestrocardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrocardComponent]
    });
    fixture = TestBed.createComponent(RestrocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
