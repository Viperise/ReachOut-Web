import { showToast } from '@/base/helpers/toastHelper';
import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string, birthDate: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='));
    if (token) {
      // Optionally decode the token or make an API call to get user info if needed
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Optionally decode the token to get user info, or fetch it from the server
        showToast('success', 'Login successful!');
        router.push('/dashboard');
      } else {
        showToast('error', 'Failed to login');
      }
    } catch (error) {
      showToast('error', 'An unexpected error occurred');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (name: string, email: string, password: string, birthDate: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, birthDate }),
      });

      if (response.ok) {
        showToast('success', 'Sign-up successful!');
        router.push('/dashboard');
      } else {
        showToast('error', 'Failed to sign up');
      }
    } catch (error) {
      showToast('error', 'An unexpected error occurred');
      console.error('Sign-up error:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      showToast('success', 'Logged out successfully');
      router.push('/login');
    } catch (error) {
      showToast('error', 'An unexpected error occurred during logout');
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const refreshAccessToken = async () => {
    setLoading(true);
    try {
      const refreshToken = document.cookie.split('; ').find((row) => row.startsWith('refreshToken='));
      if (!refreshToken) {
        throw new Error('No refresh token found');
      }

      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: refreshToken.split('=')[1] }),
      });

      if (response.ok) {
        showToast('success', 'Access token refreshed successfully');
      } else {
        const data = await response.json();
        showToast('error', data.message || 'Failed to refresh token');
        if (response.status === 401) {
          logout();
        }
      }
    } catch (error) {
      showToast('error', 'An unexpected error occurred while refreshing token');
      console.error('Refresh token error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, login, signUp, logout, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
