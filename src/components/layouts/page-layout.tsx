import { Box, chakra, ChakraProps } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import { EmailCTA } from '../blocks';

import { SectionTitle, SocialShare } from '@/components';
import {
  Footer,
  Header,
  MotionBox,
  Sidebar,
  transitionDown as variants,
} from 'chakra.ui';

import { SEOConfig } from '@/utils/seo';

export type LayoutProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  settings?: {
    showHeader: boolean;
    showFooter: boolean;
    showCta: boolean;
    showReviews: boolean;
  };
  colors?: {
    backgroundColor?: ChakraProps['backgroundColor'];
    color?: ChakraProps['color'];
  };
  seo?: { title: string; description: string; image: string };
  children?: React.ReactNode;
};

export const PageLayout: React.FC<LayoutProps> = ({
  title = 'Site Title',
  subtitle = '',
  description = '',
  settings,
  colors,
  seo, // @TODO: add image from tina
  children,
}) => {
  useEffect(() => {
    if (colors?.backgroundColor !== 'bg') return;
    document.body.style.backgroundColor = colors?.backgroundColor;
  }, [colors?.backgroundColor]);

  return (
    <>
      <NextSeo
        {...SEOConfig(
          seo?.title || title,
          subtitle,
          seo?.description || description
        )}
      />
      <SocialShare twitter facebook pinterest />
      <Sidebar />
      {settings?.showHeader && <Header />}
      <Main
        displayHeader={!!settings?.showHeader}
        color={colors?.color ?? 'text'}
        showReviews={!!settings?.showReviews}
      >
        {children}
        {settings?.showCta ? <EmailCTA /> : null}
        {settings?.showReviews ? (
          <Box id="reviews" pt={16}>
            <SectionTitle title="Our Reviews" />
          </Box>
        ) : null}
      </Main>
      {settings?.showFooter && <Footer />}
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
        mt={displayHeader ? 36 : 0}
        pb={displayHeader ? '1em' : 0}
        minH="100vh"
        mb={!showReviews ? 20 : 0}
      >
        <SkipNavContent />
        <Box position="relative" w="full" overflowX="hidden" color={color}>
          {children}
        </Box>
      </MotionBox>
    </chakra.main>
  );
};
