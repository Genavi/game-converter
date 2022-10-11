import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3lsComponent } from './h3ls.component';

describe('H3lwComponent', () => {
  let component: H3lsComponent;
  let fixture: ComponentFixture<H3lsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H3lsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H3lsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
