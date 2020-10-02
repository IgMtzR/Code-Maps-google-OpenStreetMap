import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartsGraphsComponent } from './pie-charts-graphs.component';

describe('PieChartsGraphsComponent', () => {
  let component: PieChartsGraphsComponent;
  let fixture: ComponentFixture<PieChartsGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartsGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartsGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
