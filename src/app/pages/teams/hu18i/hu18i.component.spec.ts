import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hu18iComponent } from './hu18i.component';

describe('Hu18iComponent', () => {
  let component: Hu18iComponent;
  let fixture: ComponentFixture<Hu18iComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hu18iComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hu18iComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
