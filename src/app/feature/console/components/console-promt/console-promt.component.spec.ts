import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolePromtComponent } from './console-promt.component';

describe('ConsolePromtComponent', () => {
  let component: ConsolePromtComponent;
  let fixture: ComponentFixture<ConsolePromtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolePromtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsolePromtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
