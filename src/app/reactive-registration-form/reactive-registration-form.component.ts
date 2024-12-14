import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-reactive-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, RouterOutlet],
  templateUrl: './reactive-registration-form.component.html',
  styleUrl: './reactive-registration-form.component.css',
  providers: [RegistrationServiceService]
})
export class ReactiveRegistrationFormComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;
  availableCourses: any[] = [];








  constructor(private registrationServiceService: RegistrationServiceService,private router: Router) {
    this.userForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(4)]),
      emailId: new FormControl("", [Validators.required, Validators.email]),
      city: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      branch: new FormControl("", Validators.required),
      courses: new FormControl([], [Validators.required]),
      mobileNo: new FormControl("", [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]),
      gender: new FormControl("", [Validators.required]),
      password: new FormControl("",[Validators.required]),
      birthday: new FormControl("", [Validators.required]),

      isAgree: new FormControl(false)
    });
  }
  ngOnInit(): void {

    this.registrationServiceService.getCourses().subscribe(
      (data: any[]) => {
        this.availableCourses = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }










  onSubmit() {
    const isFormValid = this.userForm.valid;
    this.isFormSubmitted = true;
    if (this.userForm.valid) {
      console.log('Form successfully submitted', this.userForm.value);

      const selectedCourses = this.userForm.value.courses.map((course: string) => {
        return { courseName: course };
      });

      const userData = {
        ...this.userForm.value,
        courses: selectedCourses
      };

      console.log('Form Data:', userData);



      this.registrationServiceService.registerUser(userData).subscribe(
        response => {
          console.log('Registration successful:', response);

        },
        error => {
          console.log('Registration error:', error);

        }
      );
    }









  }
  navigateToComponentTwo() {
    this.router.navigate(['/students']);

  }
  navigateToTeacherComponentTwo() {
    this.router.navigate(['/teacher'])
  }



}





