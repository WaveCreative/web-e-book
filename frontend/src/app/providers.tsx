import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  apiRequest,
  clearAuthToken,
  getAuthToken,
  setAuthToken,
  type ApiResponse,
} from "../lib/api";

interface SearchContextValue {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

interface AuthUser {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface GoogleAuthPayload {
  google_token: string;
  name: string;
  email: string;
  avatar?: string | null;
}

interface AuthContextValue {
  token: string | null;
  user: AuthUser | null;
  isReady: boolean;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<AuthUser>;
  register: (payload: RegisterPayload) => Promise<AuthUser>;
  googleLogin: (payload: GoogleAuthPayload) => Promise<AuthUser>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<AuthUser | null>;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AppProvidersProps {
  children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [token, setToken] = useState<string | null>(getAuthToken());
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isReady, setIsReady] = useState(!getAuthToken());

  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setUser(null);
        setIsReady(true);
        return;
      }

      try {
        const response = await apiRequest<ApiResponse<AuthUser>>("/auth/me");
        setUser(response.data);
      } catch {
        clearAuthToken();
        setToken(null);
        setUser(null);
      } finally {
        setIsReady(true);
      }
    };

    loadUser().catch(() => {
      clearAuthToken();
      setToken(null);
      setUser(null);
      setIsReady(true);
    });
  }, [token]);

  const login = async (payload: LoginPayload) => {
    const response = await apiRequest<
      ApiResponse<{ token: string; user: AuthUser }>
    >("/auth/login", {
      method: "POST",
      auth: false,
      body: JSON.stringify(payload),
    });

    setAuthToken(response.data.token);
    setToken(response.data.token);
    setUser(response.data.user);
    setIsReady(true);
    return response.data.user;
  };

  const register = async (payload: RegisterPayload) => {
    const response = await apiRequest<ApiResponse<{ user: AuthUser }>>(
      "/auth/register",
      {
        method: "POST",
        auth: false,
        body: JSON.stringify(payload),
      }
    );

    return response.data.user;
  };

  const googleLogin = async (payload: GoogleAuthPayload) => {
    const response = await apiRequest<
      ApiResponse<{ token: string; user: AuthUser }>
    >("/auth/google", {
      method: "POST",
      auth: false,
      body: JSON.stringify(payload),
    });

    setAuthToken(response.data.token);
    setToken(response.data.token);
    setUser(response.data.user);
    setIsReady(true);
    return response.data.user;
  };

  const logout = async () => {
    try {
      if (token) {
        await apiRequest<ApiResponse<null>>("/auth/logout", {
          method: "POST",
        });
      }
    } finally {
      clearAuthToken();
      setToken(null);
      setUser(null);
      setIsReady(true);
    }
  };

  const refreshUser = async () => {
    if (!token) {
      setUser(null);
      return null;
    }

    try {
      const response = await apiRequest<ApiResponse<AuthUser>>("/auth/me");
      setUser(response.data);
      return response.data;
    } catch {
      clearAuthToken();
      setToken(null);
      setUser(null);
      return null;
    }
  };

  const searchValue = {
    searchTerm,
    setSearchTerm,
  };

  const authValue: AuthContextValue = {
    token,
    user,
    isReady,
    isAuthenticated: Boolean(token && user),
    login,
    register,
    googleLogin,
    logout,
    refreshUser,
  };

  return (
    <SearchContext.Provider value={searchValue}>
      <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within AppProviders");
  }

  return context;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AppProviders");
  }

  return context;
}

export default AppProviders;
export type { AuthUser, LoginPayload, RegisterPayload, GoogleAuthPayload };
