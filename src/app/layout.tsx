import {Toaster} from 'react-hot-toast';
import {Analytics} from '@vercel/analytics/react';
import {Suspense} from 'react';

import './main.css';
import './globals.css';
import AppFooter from '../components/shared/AppFooter';
import AppHeader from '../components/shared/AppHeader';
import UseScrollToTop from '../hooks/useScrollToTop';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <AppHeader />
          <Suspense fallback={''}>{children}</Suspense>
          <Analytics />
          <AppFooter />
          <UseScrollToTop />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
