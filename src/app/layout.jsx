import './main.css';
import './globals.css';
import { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';

import AppFooter from '../components/shared/AppFooter';
import AppHeader from '../components/shared/AppHeader';
import UseScrollToTop from '../hooks/useScrollToTop';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
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
