import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-info.component.html',
  styleUrl: './teacher-info.component.css'
})
export class TeacherInfoComponent {
  
  activeButton: string = ''; 

  
  setActiveButton(button: string): void {
    this.activeButton = button;
  }
 
}
