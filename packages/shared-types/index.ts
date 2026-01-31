// Generic API response wrapper
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// User coming from Auth provider (Auth0 / Clerk etc.)
export type AuthUser = {
  id: string;
  email: string;
  name?: string;
  picture?: string;
};

// Role-based access (future use)
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN"
}
