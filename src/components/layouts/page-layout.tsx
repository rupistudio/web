import { Box, chakra, ChakraProps } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import { useEffect } from 'react';

import { SocialShare, Title } from '@/components';
import {
  Footer,
  Header,
  MotionBox,
  Sidebar,
  transitionDown as variants,
} from 'chakra.ui';

import { isBrowser, isProd } from '@/utils';
import { SEOConfig } from '@/utils/seo';

export type LayoutProps = {
  title?: string;
  description?: string;
  layout?: {
    showHeader: boolean;
    showFooter: boolean;
    showReviews: boolean;
  };
  backgroundColor?: ChakraProps['backgroundColor'];
  color?: ChakraProps['color'];
  seo?: {
    title?: string;
    description?: string;
    image?: {
      src?: string;
      alt?: string;
      attr?: string;
      caption?: string;
      width?: string;
      height?: string;
    };
  };
  children?: React.ReactNode;
};

export const PageLayout: React.FC<LayoutProps> = ({
  title = 'Site Title',
  description = '',
  layout,
  color,
  backgroundColor,
  seo, // @TODO: add image from tina
  children,
}) => {
  useEffect(() => {
    if (!isBrowser) return;
    if (backgroundColor) {
      document.body.style.setProperty(
        `--chakra-colors-chakra-body-bg`,
        `var(--chakra-colors-${backgroundColor})`
      );
    }

    // console.log(
    //   '🚀 | file: page-layout.tsx:63 | backgroundColor',
    //   window
    //     .getComputedStyle(document.body)
    //     .getPropertyValue('--chakra-colors-chakra-body-bg'),
    //   '...',
    //   backgroundColor
    // );
    if (color) {
      document.body.style.setProperty(
        `--chakra-colors-chakra-body-text`,
        `var(--chakra-colors-${color})`
      );
    }

    // console.log(
    //   '🚀 | file: page-layout.tsx:76 | color',
    //   window
    //     .getComputedStyle(document.body)
    //     .getPropertyValue('--chakra-colors-chakra-body-text'),
    //   '...',
    //   color
    // );
  }, [backgroundColor, color]);

  return (
    <>
      <NextSeo
        {...SEOConfig(seo?.title || title, seo?.description || description)}
      />
      <SocialShare twitter facebook pinterest />
      <Sidebar />
      {layout?.showHeader && <Header />}
      <Main
        displayHeader={!!layout?.showHeader}
        color={color ?? 'text'}
        showReviews={!!layout?.showReviews}
      >
        {children}
        {isProd && layout?.showReviews ? (
          <>
            <Script src={process.env.NEXT_PUBLIC_TRUSTMARY} async />
            <Box id="reviews" pt={12}>
              <Title title="Our Reviews" as="h3" my={0} />
            </Box>
          </>
        ) : null}
      </Main>
      {layout?.showFooter && <Footer />}
    </>
  );
};

type MainProps = {
  color: ChakraProps['color'];
  // bg: ChakraProps['backgroundColor'];
  displayHeader: boolean;
  showReviews: boolean;
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({
  color,
  // bg,
  displayHeader,
  showReviews,
  children,
}) => {
  return (
    <chakra.main>
      <MotionBox
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        position="relative"
        w="full"
        pt={displayHeader ? 6 : 0}
        mt={displayHeader ? 36 : 0}
        pb={displayHeader ? '4em' : 0}
        minH="100vh"
        mb={isProd && showReviews ? 20 : 0}
      >
        <SkipNavContent />
        <Box position="relative" w="full" overflowX="hidden" color={color}>
          {children}
        </Box>
      </MotionBox>
    </chakra.main>
  );
};
