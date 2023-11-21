import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseError } from '../interfeces/auth-rest';

export enum AuthErrors {
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
}

export enum AuthDisplayErrors {
  INVALID_PASSWORD = 'Invalid password',
  EMAIL_NOT_FOUND = 'Email not found',
  DEFAULT = 'Unknown error',
}

export const getAuthErrorMessage = (httpErrorResponse: HttpErrorResponse) => {
  const error: AuthResponseError = httpErrorResponse.error;
  const message: string = error.error.message;

  return AuthErrors[message]
    ? AuthDisplayErrors[message]
    : AuthDisplayErrors.DEFAULT;
};
