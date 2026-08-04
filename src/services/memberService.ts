import { API_ENDPOINTS } from "../constants";
import type { LoginRequest, Member, SignupRequest } from "../types";
import { apiClient, assertApiBaseUrl } from "./apiClient";

export async function signupMember(request: SignupRequest): Promise<Member> {
  assertApiBaseUrl();
  const { data } = await apiClient.post<Member>(API_ENDPOINTS.member.signup, request);
  return data;
}

export async function loginMember(request: LoginRequest): Promise<Member> {
  assertApiBaseUrl();
  const { data } = await apiClient.post<Member>(API_ENDPOINTS.member.login, request);
  return data;
}

export async function signoutMember(): Promise<void> {
  assertApiBaseUrl();
  await apiClient.post(API_ENDPOINTS.member.signout);
}

export async function getCurrentMember(signal?: AbortSignal): Promise<Member> {
  assertApiBaseUrl();
  const { data } = await apiClient.get<Member>(API_ENDPOINTS.member.me, { signal });
  return data;
}
