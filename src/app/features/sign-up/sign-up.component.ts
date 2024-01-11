import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  //   title = 'ai-gen-tool';

  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}
  login() {
    this.router.navigate(['login']);
  }

  handleSubmit() {
    const accountsString = localStorage.getItem('accounts') as string;

    let accounts: any = [];

    if (accountsString) {
      accounts = JSON.parse(accountsString);
    }

    const emailUsed = accounts.find((acc: any) => acc.email === this.email);

    if (emailUsed) {
      alert('Email used!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Password is not match!');
      return;
    }

    if (accounts) {
      accounts.push({
        email: this.email,
        username: this.username,
        password: this.password,
      });
    }

    localStorage.setItem('accounts', JSON.stringify(accounts));
    this.router.navigate(['login']);
  }
}
