import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Du18iComponent } from './du18i.component';

describe('Du18iComponent', () => {
  let component: Du18iComponent;
  let fixture: ComponentFixture<Du18iComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Du18iComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Du18iComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
