import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import { of } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthUtils} from '../../utils';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  error: string;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    this.authService
      .signIn(email, password)
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          this.error = AuthUtils.getAuthErrorMessage(httpErrorResponse);

          return of(httpErrorResponse);
        })
      )
      .subscribe(() => {
        this.router.navigateByUrl('/admin/posts');
      });
  }
}

