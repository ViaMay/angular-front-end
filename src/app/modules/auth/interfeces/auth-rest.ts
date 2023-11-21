export interface AuthResponse {
  email: string;
  idToken: string;
  expiresIn: string;
}

export interface AuthResponseError {
  error: {
    code: number;
    errors: AuthError[];
    message: string;
  };
}

export interface AuthError {
  domain: string;
  reason: string;
  message: string;
}
