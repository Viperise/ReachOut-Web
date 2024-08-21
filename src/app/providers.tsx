'use client';

import { ThemeProvider as NextThemesProvider } from '@app/base/helpers/themeHelper';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { ToastProvider } from './components';

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" themes={['purple-theme', 'dark-purple-theme']}>
        <ToastProvider>{children}</ToastProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
