import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registered-student',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './registered-student.component.html',
  styleUrl: './registered-student.component.css'
})
export class RegisteredStudentComponent {
  registeredStudents: any[] = []; 
  
  constructor(private httpClient: HttpClient) {
    this.registeredStudents = [];

  }
  ngOnInit(): void {
    this.getUserList()

  }
  getUserList() {
    this.httpClient.get('http://localhost:8080/nssofttechregistration/getalldata').subscribe((result: any) => {
      this.registeredStudents = result;

    })
  }



  

}
