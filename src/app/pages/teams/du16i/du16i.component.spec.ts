import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Du16iComponent } from './du16i.component';

describe('Du16Component', () => {
  let component: Du16iComponent;
  let fixture: ComponentFixture<Du16iComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Du16iComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Du16iComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
