import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  //   title = 'ai-gen-tool';
  constructor(private router: Router) {}
  login() {
    this.router.navigate(['login']);
  }
}
