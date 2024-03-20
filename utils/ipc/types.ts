export interface BackendResponse {
  data?: unknown;
  error?: { message: string; name: string; stack?: string; code?: string };
}

export interface LoginResponse {
  data?: {
    connectionString: string;
    email: string;
  };
  error?: { message: string; };
}