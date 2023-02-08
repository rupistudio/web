import { Container, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

import type { PageSectionsHero } from '.tina';
import type { FC } from 'react';

import { ColumnLeft, ColumnRight, CTABox } from './hero.components';

type HeroBlockProps = {
  heading?: string;
  subtitle?: string;
  cta?: string;
  phone?: string;
  image?: {
    src?: string;
    alt?: string;
    attr?: string;
    caption?: string;
    // width?: string;
    // height?: string;
  };
};

export const HeroBlock: FC<PageSectionsHero> = (props) => {
  return (
    <Container
      as="section"
      position="relative"
      maxW="container.responsive"
      minH="70vh"
      pb={16}
      px={{ sm: 12, md: 36, lg: 52, xl: 64 }}
      overflowX={['hidden', null, null, 'initial']}
    >
      <Stack
        position="relative"
        w="full"
        h="100%"
        justifyContent={['center', null, null, 'center']}
        alignItems={['center', null, null, 'center']}
        direction={['column', null, null, 'row']}
        gap={[20, null, null, 16]}
      >
        {props ? (
          <ColumnLeft
            intro={String(props?.intro)}
            heading={String(props?.heading)}
          />
        ) : null}
        <VStack w="full" h="100%" justifyContent="center" alignItems="center">
          {props?.image ? <ColumnRight image={props?.image} /> : null}
          {props ? (
            <CTABox
              cta={{
                title: String(props?.cta),
                subtitle: String(props?.phone),
              }}
            />
          ) : null}
        </VStack>
      </Stack>
    </Container>
  );
};
