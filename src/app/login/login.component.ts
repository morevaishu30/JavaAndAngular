import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  

  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  

  
  login() {
    const formData = this.loginForm.value;

    this.http.post('http://localhost:8080/student/login', formData, { responseType: 'text' }).subscribe({
      next: (response: string) => {
        
        const sanitizedResponse = this.extractMessage(response);

        if (sanitizedResponse.includes('Login successful')) {
          alert('Login successful!');
          this.router.navigate(['/teacher']);
        } else if (sanitizedResponse.includes('User not registered')) {
          alert('User not registered. Please register first.');
        } else {
          alert('Unexpected response: ' + sanitizedResponse);
        }
      },
      error: (err) => {
        console.error(err);
        alert('An error occurred during login.');
      }
    });
  }
  
  private extractMessage(response: string): string {
    
    return response.replace(/http:\/\/localhost:\d+/g, '').trim();
  }




}
