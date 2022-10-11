import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Du22Component } from './du22.component';

describe('Du22Component', () => {
  let component: Du22Component;
  let fixture: ComponentFixture<Du22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Du22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Du22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
