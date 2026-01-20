const API_BASE_URL = 'http://localhost:5000/api';

interface LoginData {
  identifier: string;
  password: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
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

export const authAPI = {
  async login(data: LoginData) {
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
        throw new Error('Não foi possível conectar ao servidor. Verifique se o backend está rodando.');
      }
      throw err;
    }
  },

  async verifyOtp(data: VerifyOtpData) {
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
  },

  async testConnection() {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/test`);
      return response.json();
    } catch (err) {
      throw new Error('Servidor não está respondendo');
    }
  },
};