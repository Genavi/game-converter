import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hu12Component } from './hu12.component';

describe('Hu12Component', () => {
  let component: Hu12Component;
  let fixture: ComponentFixture<Hu12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hu12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hu12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
