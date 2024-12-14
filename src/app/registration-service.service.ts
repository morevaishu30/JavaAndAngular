import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  
  // private apiUrl = 'http://localhost:8080/nssofttechregistration/savenewuser'; 
  private apiUrl = 'http://localhost:8080/courses/getallcourses'; 
 
  constructor(private http: HttpClient) { }
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
 
 
  registerUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post('http://localhost:8080/nssofttechregistration/savenewuser', userData, { headers });
  }

  
}
