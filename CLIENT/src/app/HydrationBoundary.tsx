'use client';

import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const HydrationBoundary: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // this sets the cache time to 5 minutes
        retry: 2,
      },
      mutations: {
        retry: 2,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default HydrationBoundary;
