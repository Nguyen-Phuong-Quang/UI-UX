import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-troubleshoot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './troubleshoot.component.html',
})
export class TroubleshootComponent {
  //   title = 'ai-gen-tool';
  indexSolution = -1;
  constructor(private router: Router, private route: ActivatedRoute) {}

  onChangeSolution(index: number) {
    this.indexSolution = index;
  }

  goToSolution() {
    if (this.indexSolution >= 0)
      this.router.navigate(['solution', `${this.indexSolution}`], {
        relativeTo: this.route,
      });
    else alert('Please select issue!');
  }
}
