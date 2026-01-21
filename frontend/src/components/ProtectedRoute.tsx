import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Auth } from '../pages/public/Auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-nhonga-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-nhonga-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Auth initialView="login" />;
  }

  return <>{children}</>;
};