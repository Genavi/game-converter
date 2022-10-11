import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hu14Component } from './hu14.component';

describe('Hu14Component', () => {
  let component: Hu14Component;
  let fixture: ComponentFixture<Hu14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hu14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hu14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
