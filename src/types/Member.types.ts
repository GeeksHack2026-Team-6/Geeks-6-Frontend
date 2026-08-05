export interface Member {
  id: string;
  email: string;
  username: string;
  points: number;
  emailVerification: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MemberWithTokenResponse extends Member {
  accessToken: string;
}

export interface MemberTokenResponse {
  accessToken: string;
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
