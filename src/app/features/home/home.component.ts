import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) {}

  goHome() {
    this.router.navigate(['home']);
  }

  checkLocation(path: string): boolean {
    if (this._location.path().includes(path)) return true;
    return false;
  }
}
