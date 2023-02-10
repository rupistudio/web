import { Box, chakra, ChakraProps } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

import { SocialShare, Title } from '@/components';
import {
  Footer,
  Header,
  MotionBox,
  Sidebar,
  transitionDown as variants,
} from 'chakra.ui';

import { fileExtension, getImageDetails, isBrowser, isProd } from '@/utils';
import { SEOConfig } from '@/utils/seo';

type TinaSeoImage = {
  src?: string;
  alt?: string;
  attr?: string;
  caption?: string;
  width?: string;
  height?: string;
};

type seoImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
  type: string;
};

export type LayoutProps = {
  title?: string;
  description?: string;
  image?: TinaSeoImage;
  backgroundColor?: ChakraProps['backgroundColor'];
  color?: ChakraProps['color'];

  layout?: {
    showHeader: boolean;
    showFooter: boolean;
    showReviews: boolean;
  };

  children?: React.ReactNode;
};

export const PageLayout: React.FC<LayoutProps> = ({
  title = 'Site Title',
  description = '',
  image,
  layout,
  color,
  backgroundColor,
  children,
}) => {
  const imageSpecs = useRef({} as seoImage);
  useEffect(() => {
    if ((!isBrowser && !color) || !backgroundColor) return;
    if (backgroundColor) {
      document.body.style.setProperty(
        `--chakra-colors-chakra-body-bg`,
        `var(--chakra-colors-${backgroundColor})`
      );
    }
    if (color) {
      document.body.style.setProperty(
        `--chakra-colors-chakra-body-text`,
        `var(--chakra-colors-${color})`
      );
    }
  }, [backgroundColor, color]);

  const prefix = 'https://cdn.jsdelivr.net/gh/rupistudio/web@main/public';
  useEffect(() => {
    if (!isBrowser) return;
    if (image?.src) {
      getImageDetails(String(image.src), prefix).then((value) => {
        const specs = value;
        imageSpecs.current = {
          url: prefix + image?.src,
          ...value,
          alt: String(image?.alt),
          type: `image/${fileExtension(String(image?.src))}`,
        };
      });
    }
    return () => {
      imageSpecs.current = {} as seoImage;
    };
  }, []);

  return (
    <>
      <NextSeo {...SEOConfig(title, description, imageSpecs.current)} />
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
  displayHeader: boolean;
  showReviews: boolean;
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({
  color,
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
        mt={displayHeader ? 16 : 0}
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
