import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  accountType: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Decode token to get user info (simplified)
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({
          id: payload.userId,
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          username: payload.username,
          accountType: payload.accountType
        });
      } catch (error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (identifier: string, password: string) => {
    const result = await authAPI.login({ identifier, password });
    
    localStorage.setItem('accessToken', result.accessToken);
    localStorage.setItem('refreshToken', result.refreshToken);
    
    // Decode token to get user info
    const payload = JSON.parse(atob(result.accessToken.split('.')[1]));
    setUser({
      id: payload.userId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      username: payload.username,
      accountType: payload.accountType
    });
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};