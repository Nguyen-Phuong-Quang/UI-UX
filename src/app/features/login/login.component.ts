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
    if (localStorage.getItem('accounts')) {
      const accounts = JSON.parse(localStorage.getItem('accounts') as string);

      const success = accounts.find(
        (acc: any) => acc.email === this.email && acc.password === this.password
      );

      if (success) {
        this.router.navigate(['home']);
      } else {
        alert('Wrong credential!');
      }
    }
  }
}
