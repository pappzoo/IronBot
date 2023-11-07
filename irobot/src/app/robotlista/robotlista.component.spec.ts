import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotlistaComponent } from './robotlista.component';

describe('RobotlistaComponent', () => {
  let component: RobotlistaComponent;
  let fixture: ComponentFixture<RobotlistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotlistaComponent]
    });
    fixture = TestBed.createComponent(RobotlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
