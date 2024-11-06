'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/navigation';

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextType {
  token: string | null;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { 'desafio.tech-token': storedToken } = parseCookies();

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await axios.post('https://localhost:7092/auth/login', {
        email,
        password,
      });

      const { token } = response.data;
      setCookie(undefined, 'desafio.tech-token', token, {
        maxAge: 60 * 60 * 2, // 2 hours
      });

      setToken(token);
      router.push('/dashboard');

    } catch (error) {
      console.error('Error:', error);
    }
  }

  function signOut() {
    destroyCookie(undefined, 'desafio.tech-token');
    setToken(null);
    router.push('/login');
  }

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};