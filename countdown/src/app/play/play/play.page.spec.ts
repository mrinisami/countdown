import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberSelection } from './number-selection.page';

describe('PlayPage', () => {
  let component: NumberSelection;
  let fixture: ComponentFixture<NumberSelection>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
