import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImportDataComponent } from './user-import-data.component';

describe('UserImportDataComponent', () => {
  let component: UserImportDataComponent;
  let fixture: ComponentFixture<UserImportDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserImportDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserImportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
