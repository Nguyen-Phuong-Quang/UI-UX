import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit {
  id: string | null = '';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  openTroubleShoot() {
    this.router.navigate(['home', 'troubleshoot']);
  }
}
