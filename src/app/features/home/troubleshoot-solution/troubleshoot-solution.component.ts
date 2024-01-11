import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-troubleshoot-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './troubleshoot-solution.component.html',
})
export class TroubleshootSolutionComponent implements OnInit {
  id: string = '';
  title: string = 'Issue';
  indexSolution = -1;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.title += ` ${Number(this.id) + 1}`;
  }
  onChangeSolution(index: number) {
    this.indexSolution = index;
  }

  goToSuccess() {
    if (this.indexSolution >= 0)
      this.router.navigate(['success', `${this.indexSolution}`], {
        relativeTo: this.route,
      });
    else alert('Please select solution');
  }
}
