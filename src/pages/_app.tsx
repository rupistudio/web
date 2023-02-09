import { SkipNavLink } from '@chakra-ui/skip-nav';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Script from 'next/script';

import type { AppProps, AppType } from 'next/app';

import '@/styles/globals.css';
import { ErrorBoundary, isProd } from '@/utils';
import { ChakraWrapper } from 'chakra.ui';

export default function App<AppType>({
  Component,
  pageProps,
  router,
}: AppProps) {
  // function appendScriptOnPage(pagesArray: string[]): boolean {
  //   return !!pagesArray.filter((page) => {
  //     if (page === '/') return true;
  //     return router.asPath.includes(page);
  //   }).length;
  // }

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
      {/* @FIXME: remove when live */}
      {/* {appendScriptOnPage(['/home', '/services']) ? (
        <Script src={process.env.NEXT_PUBLIC_TRUSTMARY} async />
      ) : null} */}
      <ErrorBoundary>
        <ChakraWrapper>
          <Component {...pageProps} />
        </ChakraWrapper>
        <Analytics />
      </ErrorBoundary>
    </>
  );
}
