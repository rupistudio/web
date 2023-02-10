import { SkipNavLink } from '@chakra-ui/skip-nav';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import type { AppProps, AppType } from 'next/app';

import '@/styles/globals.css';
import { ErrorBoundary } from '@/utils';
import { ChakraWrapper } from 'chakra.ui';

export default function App<AppType>({
  Component,
  pageProps,
  // router,
}: AppProps) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <SkipNavLink mt={56} ml={4}>
        Skip to content
      </SkipNavLink>
      <ErrorBoundary>
        <ChakraWrapper>
          <Component {...pageProps} />
        </ChakraWrapper>
        <Analytics />
      </ErrorBoundary>
    </>
  );
}
