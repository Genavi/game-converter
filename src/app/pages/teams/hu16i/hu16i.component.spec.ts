import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hu16iComponent } from './hu16i.component';

describe('Hu16iComponent', () => {
  let component: Hu16iComponent;
  let fixture: ComponentFixture<Hu16iComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hu16iComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hu16iComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
