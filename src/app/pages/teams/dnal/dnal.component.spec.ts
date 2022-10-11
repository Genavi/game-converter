import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnalComponent } from './dnal.component';

describe('DnalComponent', () => {
  let component: DnalComponent;
  let fixture: ComponentFixture<DnalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
