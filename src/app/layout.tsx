"use client"
import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import AppFooter from '../components/shared/AppFooter';
import AppHeader from '../components/shared/AppHeader';
import './main.css';
import './globals.css';
import UseScrollToTop from '../hooks/useScrollToTop';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
				<AnimatePresence>
					<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
							<AppHeader />
							<Suspense fallback={""}>
								{children}
							</Suspense>
							<AppFooter />
						<UseScrollToTop />
					</div>
				</AnimatePresence>
      </body>
    </html>
  )
}
