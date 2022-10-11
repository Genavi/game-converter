import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1lrComponent } from './d1lr.component';

describe('D1lrComponent', () => {
  let component: D1lrComponent;
  let fixture: ComponentFixture<D1lrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1lrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D1lrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
