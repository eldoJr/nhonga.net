const API_BASE_URL = 'http://localhost:5000/api';

interface LoginData {
  identifier: string;
  password: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  username: string;
  password: string;
  accountType: string;
}

interface VerifyOtpData {
  email?: string;
  phone?: string;
  otp: string;
  firstName: string;
  lastName: string;
}

interface ForgotPasswordData {
  email: string;
}

interface ResetPasswordData {
  email: string;
  token: string;
  newPassword: string;
}

export const authAPI = {
  async login(data: LoginData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro no login');
      }
      
      return response.json();
    } catch (err: any) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        throw new Error('Erro de conexão. Tente novamente.');
      }
      throw err;
    }
  },

  async register(data: RegisterData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
        throw new Error(error.message || 'Erro no registro');
      }
      
      return response.json();
    } catch (err: any) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        throw new Error('Erro de conexão. Tente novamente.');
      }
      throw err;
    }
  },

  async verifyOtp(data: VerifyOtpData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro na verificação');
      }
      
      return response.json();
    } catch (err: any) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        throw new Error('Erro de conexão. Tente novamente.');
      }
      throw err;
    }
  },

  async testConnection() {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/test`);
      return response.json();
    } catch (err) {
      throw new Error('Erro de conexão. Tente novamente.');
    }
  },

  async forgotPassword(data: ForgotPasswordData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao enviar email');
      }
      
      return response.json();
    } catch (err: any) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        throw new Error('Erro de conexão. Tente novamente.');
      }
      throw err;
    }
  },

  async verifyResetOtp(data: { email: string; otp: string }) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-reset-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro na verificação');
      }
      
      return response.json();
    } catch (err: any) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        throw new Error('Erro de conexão. Tente novamente.');
      }
      throw err;
    }
  },

  async resetPassword(data: ResetPasswordData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao redefinir senha');
      }
      
      return response.json();
    } catch (err: any) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        throw new Error('Erro de conexão. Tente novamente.');
      }
      throw err;
    }
  },
};