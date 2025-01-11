export interface ProfileData {
  email: string;
  id: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  type: string;
}
