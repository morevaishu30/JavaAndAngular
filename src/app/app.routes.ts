import { Routes } from '@angular/router';

import { signalUpdateFn } from '@angular/core/primitives/signals';
import { SignupComponent } from './Componunts/signup/signup.component';
import { AboutComponent } from './Componunts/aboutus/about.component';

import { CreateBinComponent } from './Componunts/create-bin/create-bin.component';
import { RegisteredStudentComponent } from './registered-student/registered-student.component';
import { ReactiveRegistrationFormComponent } from './reactive-registration-form/reactive-registration-form.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { LoginComponent } from './login/login.component';





export const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'register', component: ReactiveRegistrationFormComponent },
  { path: 'students', component: RegisteredStudentComponent },
  { path: 'teacher', component: TeacherInfoComponent },


  { path: '', redirectTo: '/login', pathMatch: 'full' },
 
 
];
// { path: 'reactiveRegistrationForm', component: ReactiveRegistrationFormComponent },


// { path: 'registeredStudent', component: RegisteredStudentComponent },
// { path: 'signup', component: SignupComponent },
// { path: 'create', component: CreateBinComponent },

// { path: 'about', loadComponent: () => import('./Componunts/aboutus/about.component').then(mod => mod.AboutComponent) },
// { path: '', redirectTo: "/reactiveRegistrationForm", pathMatch: "full" },


// //valid card always put in last line
// { path: '**', component: NotFoundComponent }

