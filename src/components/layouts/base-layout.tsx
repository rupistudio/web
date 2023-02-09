import { Box, chakra } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import { NextSeo } from 'next-seo';

import type { FC } from 'react';

import { MotionBox, transitionDown as variants } from 'chakra.ui';

import { SEOConfig } from '@/utils/seo';

export type BaseLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({
  title = 'Site Title',
  description = '',
  children,
}) => {
  return (
    <>
      <NextSeo {...SEOConfig(title, description)} />
      <Main>{children}</Main>
    </>
  );
};

type MainProps = {
  children: React.ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <chakra.main bg={'bg'}>
      <SkipNavContent />
      <MotionBox
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        position="relative"
        w="full"
        pt={0}
        mt={0}
        pb={0}
        minH="100vh"
      >
        <Box position="relative" w="full" overflowX="hidden" color={'text'}>
          {children}
        </Box>
      </MotionBox>
    </chakra.main>
  );
};
