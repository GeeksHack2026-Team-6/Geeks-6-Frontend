export interface Member {
  id: string;
  email: string;
  username: string;
  points: number;
  createdAt: string;
  updatedAt: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  username: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
