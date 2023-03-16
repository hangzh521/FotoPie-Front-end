export interface AuthState {
  isAuthenticated: boolean;
  error: string | null;
  status: "idle" | "loading" | "success" | "failed";
}

export interface LoginPayload {
  email: string;
  password: string;
}