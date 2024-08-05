'use client';

import { ThemeProvider as NextThemesProvider } from '@app/utils/helpers/themeHelper';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" themes={['purple-theme', 'dark-purple-theme']}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
