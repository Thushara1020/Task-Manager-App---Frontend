import { Component } from '@angular/core';

@Component({
  selector: 'app-sgin-in-form',
  imports: [],
  templateUrl: './sgin-in-form.html',
  styleUrl: './sgin-in-form.css',
})
export class SginInForm {
  onSignIn() {
    console.log("Sign in button clicked!");
  }
}
