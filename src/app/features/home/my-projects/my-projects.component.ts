import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  templateUrl: './my-projects.component.html',
})
export class MyProjectsComponent {
  //   title = 'ai-gen-tool';
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToDetail() {
    this.router.navigate(['home', 'detail', '123']);
  }

  goToCreate() {
    this.router.navigate(['home', 'my-projects', 'create']);
  }
}
