import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1nlComponent } from './h1nl.component';

describe('H1nlComponent', () => {
  let component: H1nlComponent;
  let fixture: ComponentFixture<H1nlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1nlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H1nlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
