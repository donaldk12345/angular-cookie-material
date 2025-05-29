import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInputAddComponent } from './users-input-add.component';

describe('UsersInputAddComponent', () => {
  let component: UsersInputAddComponent;
  let fixture: ComponentFixture<UsersInputAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersInputAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersInputAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
