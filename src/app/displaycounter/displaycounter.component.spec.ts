import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycounterComponent } from './displaycounter.component';

describe('DisplaycounterComponent', () => {
  let component: DisplaycounterComponent;
  let fixture: ComponentFixture<DisplaycounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaycounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
