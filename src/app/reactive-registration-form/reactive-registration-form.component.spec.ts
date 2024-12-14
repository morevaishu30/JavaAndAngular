import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegistrationFormComponent } from './reactive-registration-form.component';

describe('ReactiveRegistrationFormComponent', () => {
  let component: ReactiveRegistrationFormComponent;
  let fixture: ComponentFixture<ReactiveRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
