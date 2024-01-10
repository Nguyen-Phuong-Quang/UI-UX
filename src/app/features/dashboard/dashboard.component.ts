import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  //   title = 'ai-gen-tool';
  constructor(private router: Router, private route: ActivatedRoute) {}

  signIn() {
    this.router.navigate(['login']);
  }
  signUp() {
    this.router.navigate(['sign-up']);
  }
}
