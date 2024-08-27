'use client';

import { ThemeProvider as NextThemesProvider } from '@/base/helpers/themeHelper';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { ToastProvider } from './components';
import { AuthProvider } from './contexts/AuthContext';

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider attribute="class" themes={['purple-theme', 'dark-purple-theme']}>
          <ToastProvider>{children}</ToastProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </AuthProvider>
  );
}
