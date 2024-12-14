import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }




  registerUser(email: string, password: string) {


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log({ user });
        this.router.navigate(['/'])

        // ...
      })
      .catch((error) => {

        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Something wants wrong while signup")

        // ..
      });
  }
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log({ user });
        this.router.navigate(['/'])
        
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Something wants wrong while signup")

      });

    
  }
}
