import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';

  constructor(
    private readonly router: Router
  ) {}

  goHome(): void {
    this.router.navigate(['items', 5],
      {
        queryParams: {
          product: 'phone'
        }
      });
  }


}
