import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-troubleshoot-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './troubleshoot-success.component.html',
})
export class TroubleshootSuccessComponent implements OnInit {
  title = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const issue = this.route.snapshot.paramMap.get('issue');
    const solution = this.route.snapshot.paramMap.get('solution');

    this.title = `Issue ${Number(issue) + 1}: Solution ${Number(solution) + 1}`;
  }

  handleFinish() {
    this.router.navigate(['home']);
  }
}
