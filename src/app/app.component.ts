import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './Componunts/user-profile/user-profile.component';

import { NavbarComponent } from './Componunts/navbar/navbar.component';

import { AboutComponent } from './Componunts/aboutus/about.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebseConfig';
import { RegistrationComponent } from "./registration/registration.component";
import { ReactiveRegistrationFormComponent } from "./reactive-registration-form/reactive-registration-form.component";
import { RegistrationServiceService } from './registration-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisteredStudentComponent } from "./registered-student/registered-student.component";
import { LoginComponent } from './login/login.component';
import { TeacherInfoComponent } from "./teacher-info/teacher-info.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, NavbarComponent, RegistrationComponent, ReactiveRegistrationFormComponent, RegisteredStudentComponent, LoginComponent, TeacherInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {
    
    const app = initializeApp(firebaseConfig);
  }
  
 
}
