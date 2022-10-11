import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Du14Component } from './du14.component';

describe('Du14Component', () => {
  let component: Du14Component;
  let fixture: ComponentFixture<Du14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Du14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Du14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
