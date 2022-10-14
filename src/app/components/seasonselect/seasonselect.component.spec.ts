import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonselectComponent } from './seasonselect.component';

describe('SeasonselectComponent', () => {
  let component: SeasonselectComponent;
  let fixture: ComponentFixture<SeasonselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
