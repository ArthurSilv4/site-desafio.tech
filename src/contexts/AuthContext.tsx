'use client'

import { createContext, useState } from 'react';
import { setCookie } from 'nookies'
import { useRouter } from 'next/navigation';

type User = {
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;
  const router = useRouter();

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await fetch('https://localhost:7092/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setCookie(undefined, 'desafio.tech-token', data.token, {
        maxAge: 60 * 60 * 2, // 2 hours
      });

      setUser({
        email: data.email,
      });

      router.push('/');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}