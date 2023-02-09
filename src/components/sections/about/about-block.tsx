import {
  AspectRatio,
  Box,
  chakra,
  Container,
  Divider,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';

import type { Maybe, PageSectionsAbout } from '.tina';
import type { FC } from 'react';

import { FullLogo } from '../full-logo-block';
import { TitleBlock } from '../title-block';
import { Decorators, LicenseInfo, LicensesStack } from './about.components';

type AboutBlockProps = {
  title?: string;
  heading?: string;
  subtitle?: string;
  caption?: string;
  description?: string;
  image?: {
    src?: string;
    alt?: string;
    attr?: string;
    caption?: string;
    // width?: string;
    // height?: string;
  };
  showLicenses?: boolean;
};

export const AboutBlock: FC<PageSectionsAbout | AboutBlockProps> = (props) => {
  return (
    <Box
      w="full"
      py={24}
      backgroundImage="linear-gradient(180deg, var(--chakra-colors-chakra-body-bg) 0%, #FED7E2 80%, var(--chakra-colors-chakra-body-bg) 100%)" // bg > pink.100
    >
      <Box my={20}>
        <TitleBlock title="About Us" />
      </Box>
      <Container
        id="about"
        as="section"
        position="relative"
        w="max(20vw, 100%)"
        maxW="container.xl"
        minH="100vh"
        centerContent
        p={{ sm: 12, md: 16 }}
        bg="white"
        borderRadius="3xl"
        mb={24}
        overflowX={{ base: 'hidden', lg: 'initial' }}
      >
        <Decorators />
        <FullLogo />
        <Divider borderColor="gray.200" />
        {props?.title ? (
          <chakra.h2
            fontSize={{ base: '4xl', xl: '6xl' }}
            color="secondary"
            fontFamily="body"
            letterSpacing="wider"
            lineHeight={1.3}
            pt={6}
            pb={12}
            textAlign="center"
            data-tinafield="title"
          >
            {props?.title}
          </chakra.h2>
        ) : null}
        <Stack
          w="full"
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          mb={{ base: 3, md: 12 }}
        >
          {props.image ? (
            <Image
              src={String(props.image.src)}
              alt={String(props.image.alt)}
              width={984 / 2}
              height={1205 / 2}
              // fill={true}
              style={{ borderRadius: '15px' }}
            />
          ) : null}
          <Box w="full" h="full">
            {/* {props.heading && props.subtitle ? ( */}
            {props.showLicenses ? (
              <LicenseInfo
                heading={String(props.heading)}
                subheading={String(props.subtitle)}
                caption={String(props.caption)}
              />
            ) : null}
            {props.description ? (
              <Box
                position="relative"
                color="gray.600"
                textAlign={{ base: 'justify' }}
                p={{ base: 2, md: 6 }}
                maxW="lg"
              >
                <chakra.p
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  mb={9}
                  // data-tinafield="description"
                >
                  {props.description}
                </chakra.p>
              </Box>
            ) : null}
          </Box>
        </Stack>
        {props.showLicenses ? (
          <Box
            position="relative"
            textAlign="center"
            w={{ base: '80%', lg: 'full' }}
          >
            <LicensesStack
              heading={'Certified Estheticians'}
              subheading={'Our Estheticians are certified in:'}
            />
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};
