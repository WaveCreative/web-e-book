import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  apiRequest,
  clearAuthToken,
  getAuthToken,
  setAuthToken,
  type ApiResponse,
} from "../lib/api";

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
  role: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface AdminAuthValue {
  token: string | null;
  user: AdminUser | null;
  isReady: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (payload: LoginPayload) => Promise<AdminUser>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<AdminUser | null>;
}

const AdminAuthContext = createContext<AdminAuthValue | undefined>(undefined);
const USER_KEY = "ebook_admin_user";

interface AdminProvidersProps {
  children: ReactNode;
}

function getStoredUser() {
  const rawUser = localStorage.getItem(USER_KEY);

  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser) as AdminUser;
  } catch {
    return null;
  }
}

function setStoredUser(user: AdminUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function clearStoredSession() {
  clearAuthToken();
  localStorage.removeItem(USER_KEY);
}

function AdminProviders({ children }: AdminProvidersProps) {
  const [token, setToken] = useState<string | null>(() => getAuthToken());
  const [user, setUser] = useState<AdminUser | null>(() => getStoredUser());
  const [isReady] = useState(true);

  useEffect(() => {
    if (!token || !user) {
      return;
    }

    if (user.role !== "admin") {
      clearStoredSession();
      setToken(null);
      setUser(null);
    }
  }, [token, user]);

  const login = async ({ email, password }: LoginPayload) => {
    const response = await apiRequest<
      ApiResponse<{ token: string; user: AdminUser }>
    >("/auth/login", {
      method: "POST",
      auth: false,
      body: JSON.stringify({ email, password }),
    });

    if (response.data.user.role !== "admin") {
      throw new Error("Akun ini bukan admin");
    }

    setAuthToken(response.data.token);
    setStoredUser(response.data.user);
    setToken(response.data.token);
    setUser(response.data.user);
    return response.data.user;
  };

  const logout = async () => {
    clearStoredSession();
    setToken(null);
    setUser(null);
  };

  const refreshUser = async () => {
    if (!token || !user) {
      setUser(null);
      return null;
    }

    if (user.role !== "admin") {
      clearStoredSession();
      setToken(null);
      setUser(null);
      return null;
    }

    return user;
  };

  const value = useMemo<AdminAuthValue>(
    () => ({
      token,
      user,
      isReady,
      isAuthenticated: Boolean(token && user),
      isAdmin: user?.role === "admin",
      login,
      logout,
      refreshUser,
    }),
    [token, user, isReady],
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used within AdminProviders");
  }

  return context;
}

export default AdminProviders;
