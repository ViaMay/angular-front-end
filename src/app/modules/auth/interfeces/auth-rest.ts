export interface AuthResponse {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
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
