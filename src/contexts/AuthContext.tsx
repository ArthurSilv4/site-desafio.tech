'use client'

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/navigation';

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  email: string;
  password: string;
}

interface VerifyCodeData {
  email: string;
  code: string;
}

interface AuthContextType {
  token: string | null;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  verifyCode: (data: VerifyCodeData) => Promise<void>;
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
      console.error('Failed to sign in', error);
    }
  }

  async function signUp({ email, password }: SignUpData) {
    try {
      await axios.post('https://localhost:7092/auth/register', {
        email,
        password,
      });

      // Assume the backend sends a verification code to the user's email
      router.push('/verifyEmail');
    } catch (error) {
      console.error('Failed to sign up', error);
    }
  }

  async function verifyCode({ email, code }: VerifyCodeData) {
    try {
      const response = await axios.post('https://localhost:7092/auth/verify', {
        email,
        code,
      });

      const { token } = response.data;
      setCookie(undefined, 'desafio.tech-token', token, {
        maxAge: 60 * 60 * 2, // 2 hours
      });

      setToken(token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to verify code', error);
    }
  }

  function signOut() {
    setToken(null);
    destroyCookie(undefined, 'desafio.tech-token');
    router.push('/');
  }

  return (
    <AuthContext.Provider value={{ token, signIn, signUp, verifyCode, signOut }}>
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