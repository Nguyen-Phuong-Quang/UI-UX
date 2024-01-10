import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  //   title = 'ai-gen-tool';
  email = '';
  password = '';
  constructor(private router: Router) {}
  signUp() {
    this.router.navigate(['sign-up']);
  }

  handleSignIn() {
    if (this.email === 'quang29112002' && this.password === '123456') {
      this.router.navigate(['home']);
    }
  }
}
