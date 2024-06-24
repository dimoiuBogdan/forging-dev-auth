import FGNavbar from '@/components/FGLibrary/FGNavbar/FGNavbar';
import FGNotification from '@/components/FGLibrary/FGNotification';
import GlobalDialogs from '@/components/GlobalDialogs';
import { TLink } from '@/data/types';
import { ROUTES } from '@/lib/routes';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { ReactNode, Suspense } from 'react';
import HydrationBoundary from './HydrationBoundary';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forging Dev - Starter Template',
  description: 'Starter Template for Forging Dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  const LINKS: TLink[] = [{ name: 'Home', href: ROUTES.HOME_ROUTE }];

  return (
    <ClerkProvider>
      <PrimeReactProvider>
        <html lang='en'>
          <body className={inter.className}>
            <FGNavbar links={LINKS} />
            <GlobalDialogs />
            <FGNotification />
            <HydrationBoundary>
              <main className='container mx-auto px-2 pt-16'>
                <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              </main>
            </HydrationBoundary>
          </body>
        </html>
      </PrimeReactProvider>
    </ClerkProvider>
  );
}
