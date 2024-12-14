import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, booleanAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'node:stream';
import { CountryCodePipe } from '../../Pipes/country-code.pipe';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { log } from 'node:console';
function formatName(value: string) {
  return "hii " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit , OnDestroy ,OnChanges {
  //Input Proprty 
  @Input({ alias: "username", transform: formatName }) name = "";
  @Input({ transform: booleanAttribute }) isSingle!: Boolean;
  @Input() salary!: number;


  bgColor = "Red"
  //for output proprty always use EventEmitter()



  // name = "Ramesh"
  //phoneno = 1234567892;
  // status = "single"
  // salary = 40000
  // //Two way Data Binding
  // inputVal = "test"
  // onChanges(e: Event) {
  //   const value = (e.target as HTMLInputElement).value
  //   this.inputVal=value

  // }

  // //property binding
  // isButtonDisabled = true
  // //Event Binding 
  // onChange(e: Event) {
  //   const value=(e.target as HTMLInputElement).value
  //   console.log(value);

  // }
  users = [
    { name: "Abhi", lastName: "Patil", age: 24 },
    { name: "Anju", lastName: "More", age: 20 },
    { name: "Vaishu", lastName: "More", age: 22 }

  ]
  constructor() {
    //init properties
    //dependency injection
    //event listener register
    console.log("constructer called ",this.name);

  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("ngOnChanges",changes);
   
  }
  ngOnInit() {
    //init properties
    //event listener register
    //initial api calling
    console.log("ngOnInt Called",this.name);

  }
  ngOnDestroy() {
    //unregister event listner
    console.log("componunt destroy");
    
  }
  clear() {
    this.users=[]
  }
}
