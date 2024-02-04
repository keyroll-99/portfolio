import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsoleComponent } from './app-console.component';

describe('AppConsoleComponent', () => {
  let component: AppConsoleComponent;
  let fixture: ComponentFixture<AppConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppConsoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
