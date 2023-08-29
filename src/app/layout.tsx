'use client';
import {AnimatePresence} from 'framer-motion';
import {Toaster} from 'react-hot-toast';
import {Suspense} from 'react';
import {QueryClientProvider} from 'react-query';

import './main.css';
import './globals.css';
import AppFooter from '../components/shared/AppFooter';
import AppHeader from '../components/shared/AppHeader';
import UseScrollToTop from '../hooks/useScrollToTop';
import {client as queryClient} from '../../react-query';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}>
          <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
            <AppHeader />
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={''}>{children}</Suspense>
            </QueryClientProvider>
            <AppFooter />
            <UseScrollToTop />
          </div>
          <Toaster />
        </AnimatePresence>
      </body>
    </html>
  );
}
