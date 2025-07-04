import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankpageComponent } from './blankpage.component';

describe('BlankpageComponent', () => {
  let component: BlankpageComponent;
  let fixture: ComponentFixture<BlankpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlankpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlankpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
