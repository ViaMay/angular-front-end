import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  email: string;

  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.email = this.authService.email;
  }

  logout(): void {
    this.authService.logout();
  }
}
