import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandResultComponent } from './command-result.component';

describe('CommandResultComponent', () => {
  let component: CommandResultComponent;
  let fixture: ComponentFixture<CommandResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
